"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AiContentCategory, AiContentSample } from "@/lib/ai-content-samples";

const CATEGORY_ORDER: AiContentCategory[] = [
  "Product photo",
  "Lifestyle",
  "Social post",
  "Short video",
];

interface GalleryProps {
  samples: AiContentSample[];
}

interface GalleryCardProps {
  sample: AiContentSample;
  index: number;
  onOpen: (index: number, buttonEl: HTMLButtonElement) => void;
}

function GalleryCard({ sample, index, onOpen }: GalleryCardProps) {
  const [showBefore, setShowBefore] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const currentSrc =
    showBefore && sample.before ? sample.before : sample.src;
  const currentAlt =
    showBefore && sample.before
      ? `${sample.alt} (original product photo)`
      : sample.alt;

  return (
    <div className="group flex flex-col gap-3">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border bg-muted">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => {
            if (buttonRef.current) {
              onOpen(index, buttonRef.current);
            }
          }}
          aria-label={`Enlarge: ${sample.caption}`}
          className="relative block h-full w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Image
            src={currentSrc}
            alt={currentAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </button>

        {sample.before && (
          <div
            className="absolute bottom-3 right-3 z-10 flex items-center rounded-md border border-border/60 bg-background/90 p-0.5 shadow-xs backdrop-blur-xs"
            role="group"
            aria-label="Image comparison toggle"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowBefore(true);
              }}
              aria-pressed={showBefore}
              className={cn(
                "rounded px-2 py-0.5 text-xs font-medium transition-colors",
                showBefore
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Before
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowBefore(false);
              }}
              aria-pressed={!showBefore}
              className={cn(
                "rounded px-2 py-0.5 text-xs font-medium transition-colors",
                !showBefore
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              After
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <div>
          <Badge variant="secondary" className="w-fit">
            {sample.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground leading-snug">
          {sample.caption}
        </p>
      </div>
    </div>
  );
}

export function Gallery({ samples }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | AiContentCategory
  >("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxShowBefore, setLightboxShowBefore] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Categories that have at least 1 sample, strictly in CATEGORY_ORDER
  const availableCategories = CATEGORY_ORDER.filter((cat) =>
    samples.some((sample) => sample.category === cat)
  );

  // Degrade gracefully: only show filter if at least 2 distinct categories have content
  const showFilter = availableCategories.length >= 2;

  const filteredSamples =
    selectedCategory === "All"
      ? samples
      : samples.filter((sample) => sample.category === selectedCategory);

  const isOpen =
    lightboxIndex !== null && filteredSamples[lightboxIndex] !== undefined;
  const currentSample = isOpen ? filteredSamples[lightboxIndex] : null;

  const openLightbox = (index: number, buttonEl: HTMLButtonElement) => {
    triggerRef.current = buttonEl;
    setLightboxIndex(index);
    setLightboxShowBefore(false);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setLightboxShowBefore(false);
    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }, []);

  const goToPrevious = useCallback(() => {
    if (filteredSamples.length <= 1) return;
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredSamples.length) % filteredSamples.length
        : 0
    );
    setLightboxShowBefore(false);
  }, [filteredSamples.length]);

  const goToNext = useCallback(() => {
    if (filteredSamples.length <= 1) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredSamples.length : 0
    );
    setLightboxShowBefore(false);
  }, [filteredSamples.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Focus close button on lightbox open
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === "Tab" && dialogRef.current) {
        // Keep focus inside the dialog
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            "button:not([disabled]), [href], [tabindex]:not([tabindex='-1'])"
          )
        ).filter((el) => el.offsetParent !== null);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      } else if (e.key === "ArrowLeft" && filteredSamples.length > 1) {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight" && filteredSamples.length > 1) {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredSamples.length, closeLightbox, goToNext, goToPrevious]);

  if (samples.length === 0) {
    return (
      <div className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">
        <p className="text-base font-medium">No samples available yet</p>
        <p className="mt-1 text-sm">
          Product photos and lifestyle imagery will appear here soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Category Filter Tabs */}
      {showFilter && (
        <div
          className="mb-8 flex flex-wrap items-center gap-2"
          role="toolbar"
          aria-label="Filter gallery by category"
        >
          <Button
            type="button"
            variant={selectedCategory === "All" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("All")}
            aria-pressed={selectedCategory === "All"}
          >
            All
          </Button>
          {availableCategories.map((category) => (
            <Button
              key={category}
              type="button"
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      {/* Grid */}
      {filteredSamples.length === 0 ? (
        <div className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">
          No samples in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {filteredSamples.map((sample, index) => (
            <GalleryCard
              key={`${sample.src}-${index}`}
              sample={sample}
              index={index}
              onOpen={openLightbox}
            />
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isOpen && currentSample && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={currentSample.caption}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/90 p-4 sm:p-6 backdrop-blur-sm text-white animate-in fade-in-0 duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
        >
          {/* Top Bar: Controls */}
          <div className="flex items-center justify-between gap-4 z-10 w-full max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-white/15 text-white border-transparent">
                {currentSample.category}
              </Badge>

              {currentSample.before && (
                <div
                  className="flex items-center rounded-md border border-white/20 bg-black/50 p-0.5 text-xs backdrop-blur-xs"
                  role="group"
                  aria-label="Lightbox image comparison toggle"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxShowBefore(true)}
                    aria-pressed={lightboxShowBefore}
                    className={cn(
                      "rounded px-2.5 py-1 text-xs font-medium transition-colors",
                      lightboxShowBefore
                        ? "bg-white text-black"
                        : "text-zinc-300 hover:text-white"
                    )}
                  >
                    Before
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxShowBefore(false)}
                    aria-pressed={!lightboxShowBefore}
                    className={cn(
                      "rounded px-2.5 py-1 text-xs font-medium transition-colors",
                      !lightboxShowBefore
                        ? "bg-white text-black"
                        : "text-zinc-300 hover:text-white"
                    )}
                  >
                    After
                  </button>
                </div>
              )}
            </div>

            <Button
              ref={closeButtonRef}
              type="button"
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              aria-label="Close"
              className="text-white hover:bg-white/20 hover:text-white"
            >
              <X className="size-5" />
            </Button>
          </div>

          {/* Main Content Area */}
          <div
            className="relative flex-1 w-full max-w-6xl mx-auto min-h-0 flex items-center justify-center py-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeLightbox();
              }
            }}
          >
            {/* Previous Button */}
            {filteredSamples.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                aria-label="Previous sample"
                className="absolute left-0 z-20 hidden sm:flex text-white hover:bg-white/20 hover:text-white"
              >
                <ChevronLeft className="size-8" />
              </Button>
            )}

            {/* Image Container */}
            <div
              className="relative w-full h-full max-h-[75vh] flex items-center justify-center"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  closeLightbox();
                }
              }}
            >
              <Image
                src={
                  lightboxShowBefore && currentSample.before
                    ? currentSample.before
                    : currentSample.src
                }
                alt={
                  lightboxShowBefore && currentSample.before
                    ? `${currentSample.alt} (original product photo)`
                    : currentSample.alt
                }
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            {filteredSamples.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={goToNext}
                aria-label="Next sample"
                className="absolute right-0 z-20 hidden sm:flex text-white hover:bg-white/20 hover:text-white"
              >
                <ChevronRight className="size-8" />
              </Button>
            )}
          </div>

          {/* Bottom Bar: Caption and Mobile Prev/Next */}
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-2 pt-2 z-10">
            {filteredSamples.length > 1 && (
              <div className="flex sm:hidden items-center justify-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={goToPrevious}
                  aria-label="Previous sample"
                  className="bg-black/40 text-white border-white/20 hover:bg-white/20 hover:text-white"
                >
                  <ChevronLeft className="size-4 mr-1" />
                  Prev
                </Button>
                <span className="text-xs text-zinc-400">
                  {lightboxIndex + 1} / {filteredSamples.length}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={goToNext}
                  aria-label="Next sample"
                  className="bg-black/40 text-white border-white/20 hover:bg-white/20 hover:text-white"
                >
                  Next
                  <ChevronRight className="size-4 ml-1" />
                </Button>
              </div>
            )}
            <p className="text-center text-sm md:text-base text-zinc-200 max-w-2xl px-4">
              {currentSample.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
