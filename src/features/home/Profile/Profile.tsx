import img from "./cover.jpeg";
import { Panel, PanelSection } from "@/components/Panel";
import { MapPin } from "lucide-react";
import { CurrentTime } from "@/components/CurrentTime.tsx";

export function Profile() {
    return (
        <Panel>
            <PanelSection className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <img
                        src={img}
                        alt="cover"
                        className="md:size-38 size-32 bg-background rounded-2xl ring ring-offset-4 ring-border ring-offset-background"
                    />
                    <div className="flex flex-col self-end gap-1 text-muted-foreground text-sm">
                        <h1 className="font-bold text-3xl tracking-tight text-primary">
                            Low Kang Xuan
                        </h1>
                        <div>
                            @k4nggg
                        </div>
                        <span className="flex gap-3">
                            <span className="flex items-center gap-1.5">
                                <MapPin className="inline" size="18" />{" "}
                                Singapore
                            </span>
                            <span>•</span>
                            <span>
                                <CurrentTime />
                            </span>
                        </span>
                    </div>
                </div>
                <div className="text-sm">
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
