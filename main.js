const links = {
    github: "dgs-small",
    instagram: "luc_morenod",
    twitter: "lucas9667",
    linkedin: "lucmoreno-d",
  }

for (let li of socialMediaLinks.children) {
    
    const social = li.getAttribute('class')
    
    if (social === 'linkedin') {
        li.children[0].href = `https://www.${social}.com/in/${links[social]}`
    } else {
        li.children[0].href = `https://www.${social}.com/${links[social]}`
    }
}

function getGitHubUserInfo() {
    const url = `https://api.github.com/users/${links.github}`
    fetch(url).then(fetchResponse => fetchResponse.json())
        .then(data => {
            avatar.src = data.avatar_url
            userName.textContent = data.name
            userGitHubNick.textContent = data.login
            userGitHubAddress.href = data.html_url
            userBio.textContent = data.bio
    })
}

getGitHubUserInfo()
