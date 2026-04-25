import { useState } from "react";
import Icon from "@/components/ui/icon";
import { CATALOG_ITEMS } from "./data";

interface CatalogModalProps {
  selectedItem: typeof CATALOG_ITEMS[0] | null;
  onClose: () => void;
}

export default function CatalogModal({ selectedItem, onClose }: CatalogModalProps) {
  const [activePhoto, setActivePhoto] = useState(0);

  if (!selectedItem) return null;

  const photos = [selectedItem.img, ...selectedItem.gallery];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: "var(--site-bg)", border: "1px solid rgba(181,144,58,0.3)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 transition-opacity hover:opacity-60"
          onClick={onClose}
          style={{ color: "var(--site-text)" }}
        >
          <Icon name="X" size={20} />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex-shrink-0">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={photos[activePhoto]}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              {photos.length > 1 && (
                <>
                  <button
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center transition-opacity hover:opacity-70"
                    style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                    onClick={() => setActivePhoto(i => (i - 1 + photos.length) % photos.length)}
                  >
                    <Icon name="ChevronLeft" size={18} style={{ color: "#fff" }} />
                  </button>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center transition-opacity hover:opacity-70"
                    style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                    onClick={() => setActivePhoto(i => (i + 1) % photos.length)}
                  >
                    <Icon name="ChevronRight" size={18} style={{ color: "#fff" }} />
                  </button>
                </>
              )}
            </div>
            {selectedItem.gallery.length > 0 && (
              <div className="flex gap-2 p-3 overflow-x-auto">
                {photos.map((photo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-14 h-14 overflow-hidden cursor-pointer"
                    style={{ border: i === activePhoto ? "1px solid var(--gold)" : "1px solid rgba(181,144,58,0.2)" }}
                    onClick={() => setActivePhoto(i)}
                  >
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:w-1/2 flex flex-col justify-center p-8 gap-6">
            <div>
              <div className="gold-line mb-6" style={{ marginLeft: 0 }} />
              <h3 className="font-cormorant text-3xl font-light mb-4" style={{ color: "var(--site-text)" }}>
                {selectedItem.title}
              </h3>
              <p className="font-montserrat text-sm leading-loose font-light whitespace-pre-line" style={{ color: "var(--site-muted)" }}>
                {selectedItem.description}
              </p>
            </div>
            {"price" in selectedItem && selectedItem.price && (
              <p className="font-cormorant text-2xl font-light" style={{ color: "var(--gold)" }}>
                {selectedItem.price as string}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
