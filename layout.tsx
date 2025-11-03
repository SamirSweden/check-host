export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return(
        <section className=" py-[20px] bg-black">
            <div className="max-w-[1200px] px-0 mx-auto w-full h-full">
                <div className="flex items-center gap-[40px] h-full">
                    {children}
                </div>
            </div>
        </section>
    )
}

