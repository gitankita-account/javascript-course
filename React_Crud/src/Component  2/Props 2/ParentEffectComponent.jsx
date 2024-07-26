import EffectData from "../EffectData"
// import users from  "../../hooks/UseState/Use_Effect/HooksUseEffect"

function ParentEffectComponent(Props){

    return(
        <>
      <EffectData users = {Props.users}/>
        </>
    )
}

export default ParentEffectComponent