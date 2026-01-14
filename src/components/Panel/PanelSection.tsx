export function PanelSection({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={`${className} line-after py-4`}>
            {children}
        </div>
    );
}