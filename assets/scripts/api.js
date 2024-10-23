fetchProfileData()
async function fetchProfileData() {
    const response = await fetch('https://raw.githubusercontent.com/luane-loureiro/challenge-one-portfolio-br/master/data/profile.json')
    let profileData = await response.json()
    console.log (profileData)
    return(profileData)
}
