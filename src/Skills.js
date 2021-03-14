import useFetch from './useFetch';
import SkillLists from './SkillLists';

const Skills = () => {    
    
    const {data, pending, error} = useFetch('https://micaljohn60.github.io/apitests/myskills.json');

    return ( 
        <div>
            { error && <div>{error}</div>}
            { pending && <div> Loading..... </div> }
            { data && <SkillLists data={data}/>}
        </div>
     );
}
 
export default Skills;