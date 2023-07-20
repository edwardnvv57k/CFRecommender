//fetch ("https://codeforces.com/api/contest.ratingChanges?contestId=1848")
let data = [];
fetch ("https://codeforces.com/api/user.status?handle=benq&from=1&count=100")
    .then (res => {
        return res.json();
    })
    // .then (data => {
    //     //console.log(data)
    //     data.forEach(prob => {
    //         const markup = `<li>${prob.id}</li>`;
    //         document.querySelector('ol').insertAdjacentElement('beforeend', markup);
    //     });
    // })
    .then (function(data){
        let out = "";
        for (let prob of data.result){
            out += `<tr>
                        <td><strong>${(prob.problem.contestId).toString() +  prob.problem.index}</strong></td>
                        <td><a href = "https://codeforces.com/problemset/problem/${(prob.problem.contestId).toString()}/${prob.problem.index}">${(prob.problem.name)}</a> </td>
                        <td><strong><p class = "rating ${title(prob.problem.rating)}">${rate(prob.problem.rating)}</p></strong></td>
                    <td class = "tags">`;    
                        
            prob.problem.tags.forEach(tag => {
                out += `<div class = "tag">${tag} </div>`;
            });  
            out += `</tr></td>`;    
        }
        // document.querySelector('ol').insertAdjacentHTML('beforeend', out);
        document.getElementById('info').insertAdjacentHTML('beforeend', out);
        //console.log(data)
    })

console.log(data)

function title (n) {
    if (n < 1200) return "newbie";
    else if (n >= 1200 && n < 1400) return "pupil";
    else if (n >= 1400 && n < 1600) return "specialist";
    else if (n >= 1600 && n < 1900) return "expert";
    else if (n >= 1900 && n < 2100) return "cm";
    else if (n >= 2100 && n < 2400) return "master";
    else if (n >= 2400 && n < 3000) return "gm";
    else if (n >= 3000) return "lgm";
}

function rate (r){
    if (r == undefined) return "Unrated";
    return r;
}