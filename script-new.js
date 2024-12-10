function showModal(tipId) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    let title, content;

    switch (tipId) {
        case 'tip1':
            title = 'Create Valuable Content';
            content = 'To boost engagement, it\'s crucial to focus on creating content that provides value to your audience. Whether it’s answering their questions, solving their problems, or providing entertainment, valuable content is the key to building trust and keeping them engaged.';
            break;
        case 'tip2':
            title = 'Use Interactive Features';
            content = 'Interactive content such as polls, quizzes, and live Q&A sessions help keep your audience engaged and actively participating. These features encourage them to interact and share their opinions, making them feel more involved with your brand.';
            break;
        case 'tip3':
            title = 'Consistency is Key';
            content = 'Being consistent with your content is vital for retaining engagement. Posting regularly and at consistent times ensures that your audience knows when to expect new content from you, helping to establish a routine and keep them coming back for more.';
            break;
        case 'tip4':
            title = 'Leverage Visual Content';
            content = 'Visual content like images, infographics, and videos capture attention more effectively than text alone. Incorporate visuals into your posts to make them more engaging and shareable, helping to reach a larger audience.';
            break;
        case 'tip5':
            title = 'Engage in Real-Time';
            content = 'Real-time interactions such as live videos or immediate responses to comments create a sense of urgency and involvement. People love feeling like they’re part of a live conversation or event, making real-time engagement an effective strategy for boosting interaction.';
            break;
    }

    modalTitle.textContent = title;
    modalContent.textContent = content;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
function showModal(tipId) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    let title, content;

    switch (tipId) {
        case 'tip1':
            title = 'Create Valuable Content';
            content = 'To boost engagement, it\'s crucial to focus on creating content that provides value to your audience. Whether it’s answering their questions, solving their problems, or providing entertainment, valuable content is the key to building trust and keeping them engaged.';
            break;
        case 'tip2':
            title = 'Use Interactive Features';
            content = 'Interactive content such as polls, quizzes, and live Q&A sessions help keep your audience engaged and actively participating. These features encourage them to interact and share their opinions, making them feel more involved with your brand.';
            break;
        case 'tip3':
            title = 'Consistency is Key';
            content = 'Being consistent with your content is vital for retaining engagement. Posting regularly and at consistent times ensures that your audience knows when to expect new content from you, helping to establish a routine and keep them coming back for more.';
            break;
        case 'tip4':
            title = 'Leverage Visual Content';
            content = 'Visual content like images, infographics, and videos capture attention more effectively than text alone. Incorporate visuals into your posts to make them more engaging and shareable, helping to reach a larger audience.';
            break;
        case 'tip5':
            title = 'Engage in Real-Time';
            content = 'Real-time interactions such as live videos or immediate responses to comments create a sense of urgency and involvement. People love feeling like they’re part of a live conversation or event, making real-time engagement an effective strategy for boosting interaction.';
            break;
        case 'tip6':
            title = 'Understanding Social Media Analytics';
            content = 'Social media analytics help you understand your audience and the performance of your content. Track metrics like engagement rate, reach, impressions, and conversions to identify trends, optimize your posts, and improve engagement over time.';
            break;
    }

    modalTitle.textContent = title;
    modalContent.textContent = content;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
