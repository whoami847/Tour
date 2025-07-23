'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Camera, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { uploadImage } from '@/lib/storage-service';

interface ImageUploadProps {
  initialImageUrl?: string;
  onUploadComplete: (url: string) => void;
}

export function ImageUpload({ initialImageUrl = '', onUploadComplete }: ImageUploadProps) {
  const [imageUrl, setImageUrl] = useState<string>(initialImageUrl);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      toast({
        title: 'File Too Large',
        description: 'Please select an image smaller than 5MB',
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);
    setError(null);
    setProgress(0);

    try {
      // Create a unique path for the upload
      const fileExtension = file.name.split('.').pop();
      const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExtension}`;
      const downloadURL = await uploadImage(file, `uploads/${uniqueFileName}`, setProgress);
      
      setImageUrl(downloadURL);
      onUploadComplete(downloadURL);
      toast({
        title: 'Image Uploaded Successfully',
        description: 'The image has been uploaded and optimized.',
      });
    } catch (e) {
      const errorMessage = (e as Error).message || 'An unexpected error occurred during image upload.';
      setError(errorMessage);
      toast({
        title: 'Upload Failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
      setProgress(0);
      // Reset the file input
      if (event.target) {
        event.target.value = '';
      }
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-video rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/50 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <Image src={imageUrl} alt="Uploaded preview" fill className="object-cover" />
        ) : (
          <div className="text-center text-muted-foreground">
            <Camera className="mx-auto h-12 w-12 mb-2" />
            <p>No image uploaded</p>
          </div>
        )}
        <div 
            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={triggerFileSelect}
        >
          <div className="text-center text-white">
            <Camera className="mx-auto h-8 w-8 mb-2" />
            <p className="font-semibold">Change Image</p>
          </div>
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
        disabled={uploading}
      />

      {uploading && (
        <div className="space-y-2">
            <Progress value={progress} />
            <p className="text-sm text-center text-muted-foreground">{`Uploading... ${Math.round(progress)}%`}</p>
        </div>
      )}
      
      {!uploading && !imageUrl &&
        <Button type="button" onClick={triggerFileSelect} disabled={uploading} className="w-full">
            <Camera className="mr-2 h-4 w-4" />
            Upload Image
        </Button>
      }

      {error && <p className="text-sm text-destructive flex items-center gap-2"><AlertCircle className="h-4 w-4" />{error}</p>}
    </div>
  );
}
