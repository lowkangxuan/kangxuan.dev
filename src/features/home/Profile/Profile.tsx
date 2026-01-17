import Markdown from "react-markdown";
import img from "./cover.jpeg";
import { Panel, PanelSection } from "@/components/Panel";
import { MapPin } from "lucide-react";
import { CurrentTime } from "@/components/CurrentTime.tsx";

export function Profile() {
    return (
        <Panel>
            <PanelSection className="flex gap-2">
                <img
                    src={img}
                    alt="cover"
                    className="inline-block size-36 rounded-2xl p-1 border"
                />
                <div className="flex flex-col self-end gap-1">
                    <h1 className="font-bold text-3xl tracking-tight">
                        Low Kang Xuan
                    </h1>
                    <span className="flex gap-3 text-primary/70 text-sm">
                        <span className="flex items-center gap-1.5"><MapPin className="inline" size="18" /> Singapore</span>
                        <span>|</span>
                        <span><CurrentTime /></span>
                    </span>
                </div>
            </PanelSection>
            <PanelSection className="px-4">
                <div className="text-sm text-primary/70">
                    <span className="tracking-tight">Hey! I'm Kang Xuan, student in the day, working on projects in the night</span>
                </div>
            </PanelSection>
        </Panel>
    );
}
