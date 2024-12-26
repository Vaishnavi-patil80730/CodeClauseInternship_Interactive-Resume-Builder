document.getElementById('generate').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    if (!name || !email || !phone) {
        alert("Please fill out all required fields.");
        return;
    }

    const resumeOutput = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
    `;

    const outputDiv = document.getElementById('resume-output');
    outputDiv.innerHTML = resumeOutput;

    document.getElementById('export').classList.remove('hidden');
});

document.getElementById('export').addEventListener('click', () => {
    const resumeContent = document.getElementById('resume-output').innerHTML;
    const blob = new Blob([resumeContent], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.pdf';
    link.click();
});
