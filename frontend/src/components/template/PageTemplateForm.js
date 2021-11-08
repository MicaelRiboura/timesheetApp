const PageTemplateForm = ({children, title, imageSrc}) => {
    return (
        <div className="h-screen grid grid-cols-3">
                <div className="hidden md:block col-span-1 bg-black"
                    style={{
                        backgroundImage: `url(${imageSrc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '50%'
                    }}>
                </div>
                <div className="col-span-4 md:col-span-2 flex items-center justify-center h-full">
                    <div className="flex flex-col space-y-4">
                        <img className="cursor-pointer mb-12" src="/assets/images/logo.svg" width="250px" alt="logo timesheet" />
                        <h2 className="text-blue-900 text-xl text-center font-semibold">{title}</h2>
                        {children}
                    </div>
                </div>
        </div>
    );
}

export default PageTemplateForm;