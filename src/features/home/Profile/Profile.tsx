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
                    className="inline-block absolute top-0 -translate-y-1/2 size-38 bg-background border rounded-2xl p-1"
                />
                <div className="flex flex-col self-end gap-0 pl-40">
                    <h1 className="font-bold text-3xl tracking-tight">
                        Low Kang Xuan
                    </h1>
                    <span className="flex gap-3 text-primary/70 text-sm">
                        <span className="flex items-center gap-1.5">
                            <MapPin className="inline" size="18" /> Singapore
                        </span>
                        <span>|</span>
                        <span>
                            <CurrentTime />
                        </span>
                    </span>
                </div>
            </PanelSection>
            <PanelSection className="">
                <div className="text-sm text-primary">
                    <span className="tracking-tight">
                        <p>
                            Hey! I'm Kang Xuan, a Computer Science student by
                            day and a project builder by night.
                        </p>
                        <br />
                        <p>
                            I spend my free time enjoying the process of
                            developing responsive web applications using React
                            and Typescript.
                        </p>
                        <br />
                        <p>
                            My past experience in the games industry has also
                            led me to explore game design and development
                            outside of web work.
                        </p>
                    </span>
                </div>
            </PanelSection>
        </Panel>
    );
}
