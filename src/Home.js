import sidesvg from './side_vector.svg'
import rose from './rose.png'
import thor from './thor.png'

const Home = () => {

    return (
        <div className="mycontainer" >

            <div className="row" style={{justifyContent : 'center'}}>
                <div className="col-lg-7">
                    <div className="mytext">
                        <h4>Hello There!</h4>
                        <h3>I am Han</h3>
                        <p>Creative Software Engineer</p>
                    </div>

                </div>
                <div className="col-lg-2">
                    <div className="shape" style={{
                        backgroundImage: `url(${thor}),linear-gradient(#ffafbd,#ffc3a0 )`
                    }} >
                       
                    </div>
                </div>

                <div className="row mt-3" style={{justifyContent : 'center'}}>
                    <div className="col-lg-3 margin-left">
                        <div className="box">
                            <p>My Experiences </p>
                            <p className="subText"> {"<"} 1 </p>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-left">
                        <div className="box">
                            <p>Mail : </p>
                            <p className="subText"> micaljohn60@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;