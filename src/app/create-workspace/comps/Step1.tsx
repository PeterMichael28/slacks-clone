'use client';
import { useCreateWorkspaceValues } from '@/hooks/create-workspace-values';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Typography from '@/components/ui/typography';

const Step1 = () => {
 const { name, updateValues, setCurrStep } =
  useCreateWorkspaceValues();

 return (
  <>
   <Typography
    text="What is the name of your company or team"
    className="my-4"
   />

   <Typography
    text="This will be the name of your Slackzz workspace - choose something that your team will recognize."
    className="text-neutral-300"
    variant="p"
   />

   <form className="mt-6">
    <fieldset>
     <Input
      className="bg-neutral-700 text-white border-neutral-600"
      type="text"
      value={name}
      placeholder="Enter your company name"
      onChange={(event) => updateValues({ name: event.target.value })}
     />
     <Button
      type="button"
      className="mt-10"
      onClick={() => setCurrStep(2)}
      disabled={!name}
     >
      <Typography
       text="Next"
       variant="p"
      />
     </Button>
    </fieldset>
   </form>
  </>
 );
};

export default Step1;
