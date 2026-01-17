import Markdown from "react-markdown";
import img from "./cover.jpeg";
import { PanelSection } from "@/components/Panel";

export function Profile() {
    return (
        <div className="border-x">
            <div className="flex line-after">
                <div className="mx-0.5 my-0.75">
                    <img
                        src={img}
                        alt="cover"
                        className="inline-block size-48 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background"
                    />
                </div>
                <div className="flex flex-col items-stretch justify-end flex-1 border-l">
                    <h1 className="font-bold text-3xl p-2 border-y tracking-tight">
                        Low Kang Xuan
                    </h1>
                    <span className="px-2">
                        @bongkongkang
                    </span>
                </div>
            </div>
            <PanelSection className="px-4">
                <div className="prose text-sm">
                    <Markdown>{`
- Computer Science undergraduate with a strong passion in **frontend** and **software engineering**.
- Using **React** and **Typescript** to build responsive and user-centered web applications.
- Exploring **Game Design & Development** as a creative side pursuit.
                `}</Markdown>
                </div>
            </PanelSection>
        </div>
    );
}
