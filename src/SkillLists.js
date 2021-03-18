
const SkillLists = ({ data }) => {

    var webdevs = data['WebDevelopment'];
    var backenddevs = data['BackendDevelopment'];
    var frameworks = data['Frameworks'];
    var mobiledevs = data['MobileDevelopment'];
    var githublinks = data["Githublinks"];
    

    return (
        <div className="container">


        <div className="row mt-3" style={{justifyContent : 'center'}}>
            
            <div className="col-lg-5 mt-3 title">
            <img className="titleImg" src="https://cdn.dribbble.com/users/3036385/screenshots/6694433/web_development.jpg"  alt="Web Development"/>
                
                Web Development
                <div className="row" style={{justifyContent : 'center'}}>
                    {webdevs.map(webdev => (
                        <div className="buttons" key={webdev.id}>
                            {webdev.name}
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="col-lg-5 mt-3 title">
            <img className="titleImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQ2YrNK-Sk--SXGZ2gizA-weQeI83D6hsQg&usqp=CAU"  alt="Web Development"/>
                
                Backend Development
                <div className="row" style={{justifyContent : 'center'}}>
                {backenddevs.map(backenddev => (
                            <div className="buttons" key={backenddev.id}>
                                {backenddev.name}
                            </div>
                        ))}
                </div>
            </div>            

            <div className="col-lg-5 mt-3 title">
            <img className="titleImg" src="https://mpng.subpng.com/20180703/rqb/kisspng-computer-icons-computing-platform-cross-platform-5b3b8f10ec5102.615356821530629904968.jpg"   alt="Web Development"/>
                
                FrameWorks
                <div className="row" style={{justifyContent : 'center'}}>
                {frameworks.map(framework => (
                            <div className="buttons" key={framework.id}>
                                {framework.name}
                            </div>
                        ))}
                </div>
            </div>

            <div className="col-lg-5 mt-3 title">
            <img className="titleImg" src="https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_hero.jpg"  alt="Web Development"/>
                
                Mobile Development
                <div className="row" style={{justifyContent : 'center'}}>
                {mobiledevs.map(mobiledev => (
                            <div className="buttons" key={mobiledev.id}>
                                {mobiledev.name}
                            </div>
                        ))}
                </div>
            </div>
            
        </div>

        <div className="row mt-5" style={{justifyContent : 'center'}}>
            <div className="title">
                <i class="fab fa-github-alt me-3"></i>            
                <a target="#" href="https://github.com/micaljohn60" className="title">To Github Links</a> 
                
                <i class="fab fa-github-alt ms-3"></i>
            </div>

            <div className="row" style={{justifyContent : 'center'}}>
            {githublinks.map(githublink => (
                <div className="buttons" key={githublink.id}>
                    <a href={githublink.link} target="#" style={{textDecoration : 'none',color: '#707070'}}> {githublink.name}</a>
                   
                </div>
            ))}

            </div>
        </div>

        <div className="col-lg-12 mt-4" style={{textAlign : 'center'}}>
            <div className="">
                <p>Contact Me : </p>
                <p className="subText"> micaljohn60@gmail.com</p>
            </div>
        </div>
            

        </div>



    );
};

export default SkillLists;