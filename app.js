async function showAvatar() {    
    const val = document.querySelector('input').value;
    console.log(val);      
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${val}`);
    let githubUser = await githubResponse.json();
    console.log(githubUser);
  
    // show the avatar
    // let img = document.createElement('img');
    // img.src = githubUser.avatar_url;
    // img.className = "promise-avatar-example";
    
    const githubCard=document.querySelector(".githubCard");
    githubCard.innerHTML=`<image src=${githubUser.avatar_url} alt="Avator image" syle="height:10px width:10px"> 
                          <h5>Name:${githubUser.name}</h4>
                          <h5>Bio:${githubUser.bio}</h5>
                          <h5>Public repos:${githubUser.public_repos}</h5>
                          <h5>Followers${githubUser.followers}</h5>`;
    //document.body.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  
    //img.remove();     
    return githubUser;
  };

  function getVal() {
  }
 