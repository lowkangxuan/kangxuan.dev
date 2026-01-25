export function PanelHeader({children}) {
    return (
        <h2 className="line-after inline-block pr-4  font-bold text-3xl leading-tight">
            {children}
        </h2>
    );
}