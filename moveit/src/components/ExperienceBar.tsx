export function ExperienceBar(){
    return(
        <header className="experience-bar">
            <span>0 px</span>
            <div>
                <div style={{ width:'50%'}}></div>
                <span className="currente-experience" style={{ left:'50%' }}>
                    300px
                </span>
            </div>
            <span>600 px</span>
        </header>
    );
}