import img from "./cover.jpeg";
import { Panel, PanelHeader, PanelSection } from "@/components/Panel";

export function Profile() {
    return (
        <div className="border-x">
            <div className="flex line-after">
                <img
                    src={img}
                    alt="cover"
                    className="inline-block size-56 rounded-full"
                />
                <div className="grid grid-rows-2 flex-1 border-l">
                    <h1 className="font-bold text-4xl self-end p-2 border-t">
                        Low Kang Xuan
                    </h1>
                    <div className="relative">
                        <div className="absolute grid grid-cols-2 gap-2 w-full h-full pointer-events-none">
                            <div className="border-r"></div>
                            <div className="border-l"></div>
                        </div>
                        <div className="absolute grid grid-rows-2 gap-2 w-full h-full pointer-events-none">
                            <div className="border-b"></div>
                            <div className="border-t"></div>
                        </div>
                        <div className="grid grid-cols-[1fr_1fr] gap-2 border-t h-full">
                            <div className="relative flex items-center justify-center pl-4">
                                Student
                                <span className="absolute top-0 left-0 text-xs text-muted-foreground p-1">Currently</span>
                            </div>
                            <div className="relative flex items-center pl-4">He/Him</div>
                            <div className="relative flex items-center pl-4">Singapore</div>
                            <div className="relative flex items-center pl-4">Time</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
