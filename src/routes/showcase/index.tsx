import { createFileRoute } from '@tanstack/react-router'
import { DitheredBackground } from "@/components/DitheredBackground.tsx";
import { Panel } from "@/components/Panel";

export const Route = createFileRoute('/showcase/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div>
          <DitheredBackground />
          <Panel>
              <span>test</span>
          </Panel>
      </div>
  )
}
