import { generateUploadButton, generateUploadDropzone, generateReactHelpers } from '@uploadthing/react';

import { OurFileRouter } from '@/app/api/uploadthing/core';

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropZone = generateUploadDropzone<OurFileRouter>();
export const Uploader = generateReactHelpers<OurFileRouter>();

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
