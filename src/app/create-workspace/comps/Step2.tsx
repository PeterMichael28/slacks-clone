'use client';
import { useCreateWorkspaceValues } from '@/hooks/create-workspace-values';
import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import slugify from 'slugify';
import { v4 as uuid } from 'uuid';
import { createWorkspace } from '@/actions/create-workspace';
import ImageUpload from '@/components/image-upload';

const Step2 = () => {
 const { setCurrStep, updateImageUrl, imageUrl, name } =
  useCreateWorkspaceValues();
 const [isSubmitting, setIsSubmitting] = useState(false);
 const router = useRouter();

 const handleSubmit = async () => {
  setIsSubmitting(true);
  const slug = slugify(name);
  const invite_code = uuid();
  const error = await createWorkspace({
   imageUrl,
   name,
   slug,
   invite_code,
  });
  setIsSubmitting(false);
  if (error?.error) {
   console.log(error);
   return toast.error("Couldn't create workspace. Please try again.");
  }
  toast.success('Workspace created successfully');
  router.push('/');
 };

 return (
  <>
   <Button
    size="sm"
    className="text-white"
    variant="link"
    onClick={() => setCurrStep(1)}
   >
    <Typography
     text="Back"
     variant="p"
    />
   </Button>

   <form>
    <Typography
     text="Add workspace avatar"
     className="my-4"
    />
    <Typography
     text="This image can be changed later in your workspace settings."
     className="text-neutral-300"
     variant="p"
    />

    <fieldset
     disabled={isSubmitting}
     className="mt-6 flex flex-col items-center space-y-9 border p-5 rounded-lg"
    >
     <ImageUpload />
     <div className="space-x-5">
      <Button
       onClick={() => {
        updateImageUrl('');
        handleSubmit();
       }}
      >
       <Typography
        text="Skip for now"
        variant="p"
       />
      </Button>

      {imageUrl ? (
       <Button
        type="button"
        onClick={handleSubmit}
        size="sm"
        variant="destructive"
       >
        <Typography
         text="Submit"
         variant="p"
        />
       </Button>
      ) : (
       <Button
        type="button"
        size="sm"
        className="text-white bg-gray-500"
       >
        <Typography
         text="Select an Image"
         variant="p"
        />
       </Button>
      )}
     </div>
    </fieldset>
   </form>
  </>
 );
};

export default Step2;
