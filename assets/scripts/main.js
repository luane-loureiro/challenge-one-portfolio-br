function updateProfileInfo(profileData) {
    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

    const photo = document.getElementById('title__profile')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.querySelector('.name__profile')
    name.innerText = profileData.name

    const job = document.querySelector('.job__profile')
    job.innerText = profileData.job

    const sobre = document.querySelector('.about__paragraph')
    sobre.innerText = profileData.sobre

    // const location = document.getElementById('profile.location')
    // location.innerText = profileData.location

    // const phone = document.getElementById('profile.phone')
    // phone.innerText = profileData.phone
    // phone.href = `tel:${profileData.phone}`

}

function updateRedesSociais(profileData) {
    const redes = document.getElementById('title__network')
    redes.innerHTML = profileData.social.map(rede => `
    <li class="title__network__item">
        <a class="item__arrow" href="${rede.link}">${rede.name}
 
        </a>
    </li>`
).join('')
}


function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `
        <div class="skills__box">
            <ul>
                <li class="skills__img"><img src="${skill.logo}" alt="${skill.name}">
                </li>
                <li class="skills__name">${skill.name}
                </li>
            </ul>
        </div>
    `).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `
    <div class="skills__box">
    <ul>
        <li class="skills__img"><img src="${skill.logo}" alt="${skill.name}">
        </li>
        <li class="skills__name">${skill.name}
        </li>
    </ul>
</div>
`).join('')

 }

 function updateHobbies(profileData) {
    const hobbies = document.getElementById('profile.skills.hobbies')
    hobbies.innerHTML = profileData.skills.hobbies.map(hobby => `
    <div class="hobbies__box">
    <ul>
        <li class="hobbies__img"><img src="${hobby.logo}" alt="${hobby.name}">
        </li>
        <li class="hobbies__name">${hobby.name}
        </li>
    </ul>
</div>
`).join('')
 }

 
function updateCertificacoes(profileData) {
    const certificacoes = document.getElementById('profile.certificacao')
    certificacoes.innerHTML = profileData.certificacao.map(cert => `
    <a href="${cert.link}">
    <div class="certificacao__box">
    <ul class="certificacao__list">
        <li class="certificacao__item__img">

                <img src="${cert.image}" >
                <h4>
                    ${cert.name}
                </h4>          
        </li>
          
    </ul>
</div>
</a>
    
    `).join('<br><br>')
}

 function updateFormacao(profileData) {
    const formacao = document.getElementById('academic__courses')
    formacao.innerHTML = profileData.formacao.map(curso => `
    <div class="academic__courses__box">
        <ul class="academic__courses__list">
            <li class="academic__courses__item__img">
                <img src="${curso.logo}" >
            </li>
            <div class="text">    
                <div class="academic__courses__item__title">
                    <h4>${curso.name}</h4>
                    <li>
                        ${curso.curso}
                    </li>
                    <li class="academic__courses__item__subtitle">
                        <p>
                            ${curso.descricao}
                        </p>
                    </li>
                </div>
            </div>
        </ul>
    </div>
`).join('')
}



// function updateLanguages(profileData) {
//     const languages = document.getElementById('profile.languages')
//     languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
// }

 function updatePortfolio(profileData) {
     const portfolio = document.getElementById('experience__container')
     portfolio.innerHTML = profileData.portfolio.map(project => {
         return `
         <div class="experiencie__box">
            <img class="experience__img" src="${project.image}">
            <div class="experience__info">
                <h2 class="experience__title">${project.name}</h2>
                <p class="experience__text">${project.descricao}</p>
                <div class="experience__description">
                    <span class="experience__repo">
                        <a href="${project.git_url}">
                            <button class="experiencia__botao--repo">
                            Repositório
                            </button>
                        </a>
                    </span>
                    <span class="experience__demo"><a href="${project.vercel_url}"><button class="experiencia__botao--demo">Ver demo</button></a></span>
                </div>
            </div>
        </div> 
         `}).join('<br>')
 }

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('job__experience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
        <div class="jobs__box">
        <di class="jobs__list">
            <li class="jobs__item__img">
                <img src="${experience.logo}" ></li>
            <div class="text">    
                <li class="jobs__item__title">
                    <h4 class="title">
                        ${experience.name}
                    </h4>
                </li>
                <li class="jobs__item__subtitle">
                <h4 class="date">${experience.period}</h4>
                <p class="description">${experience.description.join('<br><br>')}</p>
                </li>
            </div>
        </di>
    </div>
    <br><br>
        `}).join('')
    }

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateRedesSociais(profileData)
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
    updateHobbies(profileData)
    updateFormacao(profileData)
    updateCertificacoes(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()
