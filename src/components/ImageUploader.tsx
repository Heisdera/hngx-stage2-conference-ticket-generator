"use client";

import { Button } from "@/components/ui/button";
import { useImageUpload } from "@/hooks/use-image-upload";
import clsx from "clsx";
import { X } from "lucide-react";
import Image from "next/image";

interface ImageUploaderProps {
  previewUrl: string | null;
  onImageChange: (base64String: string | null) => void;
  errorMessage: string;
}

export default function ImageUploader({
  previewUrl,
  onImageChange,
}: ImageUploaderProps) {
  const {
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
    isDragging,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    error,
  } = useImageUpload({ onImageChange, previewUrl });

  return (
    <div
      className={clsx(
        "relative flex",
        "border-dashed border-2 rounded-3xl p-[1px]",
        isDragging ? "border-teal-43" : "border-transparent"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Button
        type="button"
        id="profile-photo"
        variant="outline"
        className="relative overflow-hidden aspect-square size-48 bg-teal-18 rounded-3xl sm:size-56 flex items-center justify-center border-[3px] border-teal-43 cursor-pointer font-normal group focus-visible:ring-offset-1 focus-visible:ring-offset-black focus-visible:ring-primary focus-visible:ring-2"
        onClick={handleThumbnailClick}
        aria-label={previewUrl ? "Change image" : "Upload image"}
      >
        {previewUrl ? (
          <Image
            className="h-full w-full object-cover"
            src={previewUrl}
            alt="Preview of uploaded image"
            fill
          />
        ) : (
          <div className="space-y-3 mx-auto w-4/5" aria-hidden="true">
            <Image
              src="/assets/cloud-upload.svg"
              width={24}
              height={24}
              className="mx-auto"
              alt="cloud upload icon"
            />
            <p className="text-sm text-neutral-98 leading-relaxed text-center text-wrap">
              Drag & drop or click to upload
            </p>
          </div>
        )}

        {previewUrl && (
          <div
            className="absolute space-y-3 mx-auto w-4/5 opacity-0 transition-all duration-300 group-hover:opacity-100"
            aria-hidden="true"
          >
            <Image
              src="/assets/cloud-upload.svg"
              width={24}
              height={24}
              className="mx-auto"
              alt="cloud upload icon"
            />
            <p className="text-sm text-neutral-98 leading-relaxed text-center text-wrap">
              Drag & drop or click to upload
            </p>
          </div>
        )}
      </Button>

      {previewUrl && (
        <Button
          onClick={handleRemove}
          size="icon"
          variant="destructive"
          className="absolute -right-2 -top-2 size-6 rounded-full border-2 border-background focus-visible:ring-offset-1 focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-black"
          aria-label="Remove image"
        >
          <X size={16} />
        </Button>
      )}

      {error && (
        <div className="absolute -bottom-5 left-0 right-0 flex items-center justify-center bg-red-18 text-red-500 font-medium text-sm">
          {error}
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
        aria-label="Upload image file"
      />
    </div>
  );
}
