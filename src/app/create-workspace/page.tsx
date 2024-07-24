'use client';

import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Typography from '@/components/ui/typography';
import { useRouter } from 'next/navigation';
import { useCreateWorkspaceValues } from '@/hooks/create-workspace-values';
import Step1 from './comps/Step1';
import Step2 from './comps/Step2';

const CreateWorkspacePage = () => {
 const { currStep } = useCreateWorkspaceValues();

 let stepInView = null;

 switch (currStep) {
  case 1:
   stepInView = <Step1 />;
   break;
  case 2:
   stepInView = <Step2 />;
   break;
  default:
   stepInView = <Step1 />;
 }

 return (
  <div className="w-screen h-screen grid place-content-center bg-neutral-800 text-white">
   <div className="p-3 max-w-[550px]">
    <Typography
     text={`step ${currStep} of 2`}
     variant="p"
     className="text-neutral-400"
    />

    {stepInView}
   </div>
  </div>
 );
};

export default CreateWorkspacePage;
