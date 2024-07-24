import { getUserData } from '@/actions/get-user-data';
import { getUserWorkspaceChannels } from '@/actions/get-user-workspace-channels';
import {
 getCurrentWorkspaceData,
 getUserWorkspaceData,
} from '@/actions/workspaces';
import InfoSection from '@/components/info-section';
import NoDataScreen from '@/components/no-data-component';
import Sidebar from '@/components/sidebar';
import { Workspace as UserWorkspace } from '@/types/app';
import { redirect } from 'next/navigation';
import React from 'react';

const WorkspacePage = async ({
 params: { workspaceId },
}: {
 params: { workspaceId: string };
}) => {
 const userData = await getUserData();

 if (!userData) return redirect('/auth');

 const [userWorkspaceData] = await getUserWorkspaceData(
  userData.workspaces!,
 );

 const [currentWorkspaceData] = await getCurrentWorkspaceData(
  workspaceId,
 );

 const userWorkspaceChannels = await getUserWorkspaceChannels(
  currentWorkspaceData.id,
  userData.id,
 );

 return (
  <>
   <div className="hidden md:block">
    <Sidebar
     currentWorkspaceData={currentWorkspaceData}
     userData={userData}
     userWorkspacesData={userWorkspaceData as UserWorkspace[]}
    />

    <InfoSection
     currentWorkspaceData={currentWorkspaceData}
     userData={userData}
     userWorkspaceChannels={userWorkspaceChannels}
     currentChannelId=""
    />

    <NoDataScreen
     userId={userData.id}
     workspaceId={currentWorkspaceData.id}
     workspaceName={currentWorkspaceData.name}
    />
   </div>
   <div className="md:hidden block min-h-screen">Mobile</div>
  </>
 );
};

export default WorkspacePage;
