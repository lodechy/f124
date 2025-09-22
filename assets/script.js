const goToDatatable = document.getElementById("go-to-datatable");
const goToCharts = document.getElementById("go-to-charts");
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleBtnTooltip = document.getElementById('tooltip-theme-text');
const chartsDropdownBtn = document.getElementById('chartsDropdownBtn');
const tableHead = document.getElementById('tableHead');
const tableHead2 = document.getElementById('tableHead2');
const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const paginationWrapper = document.getElementById('pagination').querySelector('ul');
const rangeStart = document.getElementById('rangeStart');
const rangeEnd = document.getElementById('rangeEnd');
const totalItems = document.getElementById('totalItems');
const toggleSprint = document.getElementById('toggleSprint');
const toggleNotDone = document.getElementById('toggleNotDone');
const swiperDiv = document.getElementById('swiper');
const championshipStanding = document.getElementById('championshipStanding');
const chartRacesDiv = document.getElementById('chart-races');
const chartChampionshipDiv = document.getElementById('chart-championship');

// const points = [0, 1, 2, 4, 6, 8, 10, 12, 15, 18, 25];
const data = [
    { date: '01/09/2025', gp_flag: '🇧🇭', gp_name: 'Bahreïn', race_gauvain_pos: 19, race_gauvain_pts: 0, race_galahad_pos: 1, race_galahad_pts: 26, quali_gauvain_pos: 7, quali_gauvain_tps: '1:38.388', quali_galahad_pos: 1, quali_galahad_tps: '1:36.315', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Bahrain-carbon.png' },
    { date: '05/09/2025', gp_flag: '🇸🇦', gp_name: 'Arabie Saoudite', race_gauvain_pos: 1, race_gauvain_pts: 26, race_galahad_pos: 5, race_galahad_pts: 10, quali_gauvain_pos: 1, quali_gauvain_tps: '1:35.877', quali_galahad_pos: 17, quali_galahad_tps: '1:39.913', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Saudi-Arabia-carbon.png' },
    { date: '', gp_flag: '🇦🇺', gp_name: 'Australie', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2022/02/Australie-carbon.png' },
    { date: '', gp_flag: '🇯🇵', gp_name: 'Japon', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2022/02/Japon-carbon.png' },
    { date: '', gp_flag: '🇨🇳', gp_name: 'Chine (Sprint)', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/uploads/image/2024/circuits/China_20carbon.png' },
    { date: '', gp_flag: '🇨🇳', gp_name: 'Chine', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/uploads/image/2024/circuits/China_20carbon.png' },
    { date: '', gp_flag: '🇺🇸', gp_name: 'Miami (Sprint)', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2022/02/Miami-carbon.png' },
    { date: '', gp_flag: '🇺🇸', gp_name: 'Miami', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2022/02/Miami-carbon.png' },
    { date: '', gp_flag: '🇮🇹', gp_name: 'Imola', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Emilia-Romagna-carbon.png' },
    { date: '', gp_flag: '🇲🇨', gp_name: 'Monaco', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: true, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Monte-Carlo-carbon.png' },
    { date: '', gp_flag: '🇨🇦', gp_name: 'Canada', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2022/02/Canada-carbon.png' },
    { date: '', gp_flag: '🇪🇸', gp_name: 'Espagne', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/uploads/image/2023/circuits/Spain-carbon-2023.png' },
    { date: '', gp_flag: '🇦🇹', gp_name: 'Autriche (Sprint)', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Austria-carbon.png' },
    { date: '', gp_flag: '🇦🇹', gp_name: 'Autriche', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Austria-carbon.png' },
    { date: '', gp_flag: '🇬🇧', gp_name: 'Grande-Bretagne', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Great-Britain-carbon.png' },
    { date: '', gp_flag: '🇭🇺', gp_name: 'Hongrie', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Hungar-carbon.png' },
    { date: '', gp_flag: '🇧🇪', gp_name: 'Belgique', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: true, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Belgium-carbon.png' },
    { date: '', gp_flag: '🇳🇱', gp_name: 'Pays-Bas', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Netherlands-carbon.png' },
    { date: '', gp_flag: '🇮🇹', gp_name: 'Monza', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: true, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Italy-carbon.png' },
    { date: '', gp_flag: '🇦🇿', gp_name: 'Azerbaïdjan', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Azerbaijan-carbon.png' },
    { date: '', gp_flag: '🇸🇬', gp_name: 'Singapour', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/uploads/image/2023/circuits/Singapore-carbon-2023.png' },
    { date: '', gp_flag: '🇺🇸', gp_name: 'Texas (Sprint)', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/USA-carbon.png' },
    { date: '', gp_flag: '🇺🇸', gp_name: 'Texas', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/USA-carbon.png' },
    { date: '', gp_flag: '🇲🇽', gp_name: 'Mexique', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Mexico-carbon.png' },
    { date: '', gp_flag: '🇧🇷', gp_name: 'Brésil (Sprint)', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Brazil-carbon.png' },
    { date: '', gp_flag: '🇧🇷', gp_name: 'Brésil', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Brazil-carbon.png' },
    { date: '', gp_flag: '🇺🇸', gp_name: 'Las Vegas', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2022/12/Las-Vegas-carbon-AR.png' },
    { date: '', gp_flag: '🇶🇦', gp_name: 'Qatar (Sprint)', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/qatar-silhouette-ar.png' },
    { date: '', gp_flag: '🇶🇦', gp_name: 'Qatar', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/qatar-silhouette-ar.png' },
    { date: '', gp_flag: '🇦🇪', gp_name: 'Abu Dhabi', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/uploads/image/2023/circuits/Abu_Dhab_carbon-post2021.png' },
    { date: '', gp_flag: '🇵🇹', gp_name: 'Portugal', race_gauvain_pos: '', race_gauvain_pts: '', race_galahad_pos: '', race_galahad_pts: '', quali_gauvain_pos: '', quali_gauvain_tps: '', quali_galahad_pos: '', quali_galahad_tps: '', legendary: false, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Portugal-carbon.png' }
    // Copies pour tester la pagination
    // ...Array.from({ length: 23 }, (_, i) => ({ date: `0${(i % 9) + 1}/09/2025`, gp_flag: '🇫🇷', gp_name: `France ${i + 1}`, race_gauvain_pos: i % 20, race_gauvain_pts: points[Math.floor(Math.random() * points.length)], race_galahad_pos: (i % 5) + 1, race_galahad_pts: points[Math.floor(Math.random() * points.length)], quali_gauvain_pos: i % 10, quali_gauvain_tps: `1:3${i % 10}.456`, quali_galahad_pos: 1, quali_galahad_tps: `1:36.3${i % 10}${i % 9}`, gp_map: 'https://aurupteur.com/wp-content/uploads/2021/09/Portugal-carbon.png' }))
];
const lastRace = data.findLast((item => item.date));
const nextRace = data.find((item => !item.date));
const pictureUrlGauvain = 'https://static-cdn.jtvnw.net/jtv_user_pictures/b83e513b-decf-41c9-8f28-aa40b75ec651-profile_image-150x150.png';
const pictureUrlGalahad = 'https://static-cdn.jtvnw.net/jtv_user_pictures/f4fac690-84cb-4aa7-a515-70c90dc14675-profile_image-150x150.png';
const twitchChannelGauvain = 'gau20_';
const twitchChannelGalahad = 'galahad_x_on';

let currentPage = 1;
let rowsPerPage = 10;
let currentView = 'course';
let filteredData = [...data];
let nbSprint = 0;
let championshipPointsGauvain = 0;
let championshipPointsGalahad = 0;
let isLiveGauvainSpan = ``;
let isLiveGalahadSpan = ``;
let nbRaceDone = 0;
let totalRaces = 0;
const raceDonePercent = nbRaceDone / totalRaces * 100;



// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
};

themeToggleBtn.addEventListener('click', function() {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            themeToggleBtnTooltip.innerHTML = 'Thème clair';
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            themeToggleBtnTooltip.innerHTML = 'Thème sombre';
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            themeToggleBtnTooltip.innerHTML = 'Thème clair';
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            themeToggleBtnTooltip.innerHTML = 'Thème sombre';
            localStorage.setItem('color-theme', 'dark');
        }
    }
});

async function isChannelLive(channelName) {
    const url = 'https://gql.twitch.tv/gql';
    const headers = {
        'Client-ID': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
        'Content-Type': 'application/json',
    };
    const body = JSON.stringify([{
        operationName: 'VideoPlayerStatusOverlayChannel',
        query: 'query VideoPlayerStatusOverlayChannel($channel: String!) { user(login: $channel) { id stream { id type __typename } __typename }}',
        variables: { channel: channelName },
    }]);
  
    const response = await fetch(url, { method: 'POST', headers, body });
    const json = await response.json();
    const stream = json[0]?.data?.user?.stream;
    if (stream && stream.type === 'live' && stream.__typename === 'Stream') {
        return { live: true, type: stream.type };
    } else {
        return { live: false };
    }
}

async function checkLiveStatus() {
    try {
        await Promise.all([
            isChannelLive(twitchChannelGauvain).then(status => {
                if (status.live) {
                    document.getElementById('liveBadgeGauvain').classList.remove('hidden');
                }
            }),
            isChannelLive(twitchChannelGalahad).then(status => {
                if (status.live) {
                    document.getElementById('liveBadgeGalahad').classList.remove('hidden');
                }
            })
        ]);
    } catch (err) {
        console.error(err);
    }
}

goToDatatable.addEventListener("click", () => {
    document.querySelector('#datatable').scrollIntoView({
        behavior: 'smooth',
        block: "start"
    });
});

goToCharts.addEventListener("click", () => {
    document.querySelector('#charts').scrollIntoView({
        behavior: 'smooth',
        block: "start"
    });
});

data.forEach((item) => {
    if (item.gp_name.includes('Sprint')) nbSprint++;
    else totalRaces++;
    if (item.date) {
        championshipPointsGauvain += item.race_gauvain_pts;
        championshipPointsGalahad += item.race_galahad_pts;
        if (!item.gp_name.includes('Sprint')) nbRaceDone++;
    }
});

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (start >= end) {
        obj.innerHTML = end;
        return;
    }
    const range = end - start;
    var current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}



animateValue("lastRoundNb", 0, nbRaceDone, 1200);
document.getElementById('toggleSprintValue').innerText = `(${nbSprint})`;
document.getElementById('toggleNotDoneValue').innerText = `(${totalRaces - nbRaceDone})`;
document.getElementById('totalRoundNb').innerText = totalRaces;

const renderTable = () => {

    if (document.contains(document.getElementById("table-loading"))) document.getElementById('table-loading').remove();

    let displayData = filteredData.filter(item => (toggleSprint.checked || !item.gp_name.includes('Sprint')) && (toggleNotDone.checked || item.date));

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = displayData.slice(start, end);

    tableHead.innerHTML = `
        ${ currentView === 'course'
            ? `<th class="px-4 py-3 border-e border-gray-200 dark:border-gray-700 w-1 table-cell-small" scope="col">GP</th><th class="px-4 py-3 border-e border-gray-200 dark:border-gray-700 w-1 table-cell-large" scope="col">Grand Prix</th>
                <th class="px-4 py-3 text-center table-cell-small" scope="col">Pos.</th><th class="px-4 py-3 text-center table-cell-large" scope="col">Position</th>
                <th class="px-4 py-3 text-center border-e border-gray-200 dark:border-gray-700 table-cell-small" scope="col">Pts.</th><th class="px-4 py-3 text-center border-e border-gray-200 dark:border-gray-700 table-cell-large" scope="col">Points</th>
                <th class="px-4 py-3 text-center table-cell-small" scope="col">Pos.</th><th class="px-4 py-3 text-center table-cell-large" scope="col">Position</th>
                <th class="px-4 py-3 text-center table-cell-small" scope="col">Pts.</th><th class="px-4 py-3 text-center table-cell-large" scope="col">Points</th>`
            : `<th class="px-4 py-3 border-e border-gray-200 dark:border-gray-700 w-1 table-cell-small" scope="col">GP</th><th class="px-4 py-3 border-e border-gray-200 dark:border-gray-700 w-1 table-cell-large" scope="col">Grand Prix</th>
                <th class="px-4 py-3 text-center table-cell-small" scope="col">Pos.</th><th class="px-4 py-3 text-center table-cell-large" scope="col">Position</th>
                <th class="px-4 py-3 text-center border-e border-gray-200 dark:border-gray-700 table-cell-small" scope="col">Tps.</th><th class="px-4 py-3 text-center border-e border-gray-200 dark:border-gray-700 table-cell-large" scope="col">Temps</th>
                <th class="px-4 py-3 text-center table-cell-small" scope="col">Pos.</th><th class="px-4 py-3 text-center table-cell-large" scope="col">Position</th>
                <th class="px-4 py-3 text-center table-cell-small" scope="col">Tps.</th><th class="px-4 py-3 text-center table-cell-large" scope="col">Temps</th>`
        }      
    `;

    tableHead2.innerHTML = `
        <th class="px-4 pt-3 border-e border-gray-200 dark:border-gray-700" scope="col"></th>
        <th class="px-4 pt-3 text-center border-e border-gray-200 dark:border-gray-700" scope="colgroup" colspan="2">Gauvain</th>
        <th class="px-4 pt-3 text-center" scope="colgroup" colspan="2">Galahad</th>
    `;

    const badgeSprint = `
        <span class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-sm text-2xs ms-2 px-1 block sm:hidden">S</span>
        <span class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-sm text-xs font-medium ms-2 px-1.5 py-0.5 hidden sm:block">Sprint</span>
    `;

    tableBody.innerHTML = ``;

    pageData.forEach((row, idx) => {
        const tr = document.createElement('tr');
        tr.classList = `text-gray-900 whitespace-nowrap dark:text-white`;
        if (idx % 2 !== 0) tr.classList.add('bg-gray-100/40', 'dark:bg-gray-900/40');
        if (!row.date) tr.classList.add('font-opacity-25');
        tr.innerHTML = `
        <td class="flex items-center px-4 py-2 font-medium">
          <span class="text-xl leading-tight">${row.gp_flag}</span>
          ${ row.gp_name.slice(-8) === "(Sprint)"
            ? `<span class="ms-1.5 hidden sm:block">${row.gp_name.slice(0, row.gp_name.length-9)}</span>${badgeSprint}`
            : `<span class="ms-1.5 hidden sm:inline-flex items-center">${row.gp_name}
                ${ row.legendary
                  ? `<svg class="ms-1 w-3.5 h-3.5 text-yellow-400 opacity-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                    </svg>
                `
                  : ``
                }
              </span>`
          }
        </td>
        ${
          currentView === 'course'
            ? `<td class="p-2 font-medium text-center border-l border-gray-200 dark:border-gray-700">${row.race_gauvain_pos !== '' ? row.race_gauvain_pos : '-'}</td>
               <td class="p-2 font-medium text-center border-r border-gray-200 dark:border-gray-700">${row.race_gauvain_pts !== '' ? row.race_gauvain_pts : '-'}</td>
               <td class="p-2 font-medium text-center">${row.race_galahad_pos !== '' ? row.race_galahad_pos : '-'}</td>
               <td class="p-2 font-medium text-center">${row.race_galahad_pts !== '' ? row.race_galahad_pts : '-'}</td>`
            : `<td class="p-2 font-medium text-center border-l border-gray-200 dark:border-gray-700">${row.quali_gauvain_pos !== '' ? row.quali_gauvain_pos : '-'}</td>
               <td class="p-2 font-medium text-center border-r border-gray-200 dark:border-gray-700">${row.quali_gauvain_tps !== '' ? row.quali_gauvain_tps : '-'}</td>
               <td class="p-2 font-medium text-center">${row.quali_galahad_pos !== '' ? row.quali_galahad_pos : '-'}</td>
               <td class="p-2 font-medium text-center">${row.quali_galahad_tps !== '' ? row.quali_galahad_tps : '-'}</td>`
        }
      `;
        tableBody.appendChild(tr);
    });

    if (pageData.length < rowsPerPage) {
        for (let i = pageData.length; i < rowsPerPage; i++) {
            const tr = document.createElement('tr');
            tr.classList = `text-gray-900 whitespace-nowrap dark:text-white font-opacity-25`;
            if (i % 2 !== 0) tr.classList.add('bg-gray-100/40', 'dark:bg-gray-900/40');
            tr.innerHTML = `<td class="flex items-center px-4 py-2 font-medium"><span class="text-xl leading-tight"> </span></td><td class="p-2 font-medium text-center border-l border-gray-200 dark:border-gray-700"> </td><td class="p-2 font-medium text-center border-r border-gray-200 dark:border-gray-700"> </td><td class="p-2 font-medium text-center"> </td><td class="p-2 font-medium text-center"> </td>`;
            tableBody.appendChild(tr);
        }
    }

    rangeStart.textContent = displayData.length ? start + 1 : 0;
    rangeEnd.textContent = Math.min(end, displayData.length);
    totalItems.textContent = displayData.length;

    renderPagination(displayData.length);
};

const renderPagination = (nbRow) => {
    const totalPages = Math.ceil(nbRow / rowsPerPage);
    pagination.innerHTML = "";

    const createPageButton = (pageNum, active = false) => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="${active ? 'z-10 text-gray-900 bg-gray-100 border-gray-300 hover:bg-gray-200 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'} flex items-center justify-center text-sm w-9 h-9 leading-tight border dark:border-gray-700 cursor-pointer">${pageNum}</span>`;
        li.addEventListener("click", (e) => {
            e.preventDefault();
            currentPage = pageNum;
            renderTable();
        });
        pagination.appendChild(li);
    };

    // Previous Button
    const prev = document.createElement("li");
    prev.innerHTML = `<span class="flex items-center justify-center h-full w-9 h-9 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"><svg class="w-5 h-5" fill="currentColor"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/></svg></span>`;
    prev.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });
    pagination.appendChild(prev);

    // Calcul des pages à afficher
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
        endPage = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
        startPage = Math.max(totalPages - 4, 1);
    }

    // Affiche le premier bouton + ellipsis si besoin
    if (startPage > 1) {
        createPageButton(1);
        if (startPage > 2) {
            const ellipsis = document.createElement("li");
            ellipsis.innerHTML = `<span class="flex items-center justify-center text-sm w-9 h-9 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">...</span>`;
            pagination.appendChild(ellipsis);
        }
    }

    // Affiche les pages centrées autour de currentPage
    for (let i = startPage; i <= endPage; i++) {
        createPageButton(i, i === currentPage);
    }

    // Affiche ellipsis + dernier bouton si besoin
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement("li");
            ellipsis.innerHTML = `<span class="flex items-center justify-center text-sm w-9 h-9 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">...</span>`;
            pagination.appendChild(ellipsis);
        }
        createPageButton(totalPages);
    }

    // Next Button
    const next = document.createElement("li");
    next.innerHTML = `
      <span class="flex items-center justify-center h-full w-9 h-9 rounded-r-lg text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
      <svg class="w-5 h-5" fill="currentColor">
      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
      </svg>
      </span>
    `;
    next.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });
    pagination.appendChild(next);
};



document.querySelectorAll('input[name="table-view"]').forEach(radio => {
    radio.addEventListener('change', e => {
        currentView = e.target.value;
        setFilteredData();
        currentPage = 1;
        renderTable();
    });
});

searchInput.addEventListener('input', () => {
    setFilteredData();
    currentPage = 1;
    renderTable();
});

const setFilteredData = () => {
    const term = searchInput.value.toLowerCase();
    currentView === 'course' ?
        filteredData = data.filter(item => item.gp_name.toLowerCase().includes(term) || item.date.includes(term) || (item.race_gauvain_pos).toString().toLowerCase().includes(term) || (item.race_gauvain_pts).toString().toLowerCase().includes(term) || (item.race_galahad_pos).toString().toLowerCase().includes(term) || (item.race_galahad_pts).toString().toLowerCase().includes(term)) :
        filteredData = data.filter(item => item.gp_name.toLowerCase().includes(term) || item.date.includes(term) || (item.quali_gauvain_pos).toString().toLowerCase().includes(term) || (item.quali_gauvain_tps).toString().toLowerCase().includes(term) || (item.quali_galahad_pos).toString().toLowerCase().includes(term) || (item.quali_galahad_tps).toString().toLowerCase().includes(term));
}

toggleSprint.addEventListener('change', () => {
    currentPage = 1;
    renderTable();
});

toggleNotDone.addEventListener('change', () => {
    currentPage = 1;
    renderTable();
});

document.getElementById('rowsPerPageSelect').addEventListener('change', () => {
    rowsPerPage = parseInt(rowsPerPageSelect.value, 10);
    currentPage = 1;
    renderTable();
});

// Initial render
renderTable();




// CHAMPIONSHIP STANDING

function renderChampionshipStanding() {
    championshipStanding.innerHTML = ``;
    if (championshipPointsGauvain >= championshipPointsGalahad) {
        renderChampionshipItem(pictureUrlGauvain, "Gauvain", twitchChannelGauvain);
        renderChampionshipItem(pictureUrlGalahad, "Galahad", twitchChannelGalahad);
    } else {
        renderChampionshipItem(pictureUrlGalahad, "Galahad", twitchChannelGalahad);
        renderChampionshipItem(pictureUrlGauvain, "Gauvain", twitchChannelGauvain);
    }
    animateValue("championshipPointsGauvain", 0, championshipPointsGauvain, 1000);
    animateValue("championshipPointsGalahad", 0, championshipPointsGalahad, 1000);
    checkLiveStatus();
}
renderChampionshipStanding();

function renderChampionshipItem(pictureUrl, name, twitchChannel) {
    const li = document.createElement('li');
    if (championshipStanding.children.length === 0) li.classList = `py-3 sm:py-4`;
    else li.classList = `pt-3 sm:pt-4`;
    li.innerHTML = `
        <div class="flex items-center">
            <div class="shrink-0">
                <img class="w-12 h-12 rounded-full" src="${pictureUrl}" alt="Photo ${name}">
            </div>
            <div class="flex-1 min-w-0 ms-4">
                <p class="flex items-center text-base font-medium text-gray-900 truncate dark:text-white sm:text-lg">                    
                    ${ name }
                    <span id="liveBadge${ name }" class="hidden ms-2 px-1 py-0.5 text-white text-xs bg-red-700 rounded-sm">LIVE</span>
                </p>
                <a href="https://www.twitch.tv/${twitchChannel}" target="_blank" class="text-sm text-gray-500 truncate dark:text-gray-400 hover:underline underline-offset-3">twitch.tv/${twitchChannel}</a>
            </div>
            <div class="inline-flex items-center text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                <span id="championshipPoints${name}"></span> 
                ${ (name === "Gauvain" && championshipPointsGauvain < 2) || (name === "Galahad" && championshipPointsGalahad < 2)
                    ? `<span class="hidden sm:block md:hidden lg:block">point</span><span class="block sm:hidden md:block lg:hidden">pt</span>`
                    : `<span class="hidden sm:block md:hidden lg:block">points</span><span class="block sm:hidden md:block lg:hidden">pts</span>`
                }
            </div>
        </div>
    `;
    championshipStanding.appendChild(li);
}



// SCHEDULE CAROUSEL

swiperDiv.innerHTML = ``;
let displayData = filteredData.filter(item => !item.gp_name.includes('Sprint'));

displayData.forEach((round, i) => {

    const slide = document.createElement('div');
    slide.classList = 'swiper-slide';
    if (round.date && displayData.findIndex(round => !round.date) !== -1) slide.classList.add('opacity-40');

    slide.innerHTML = `
        <div class="flex items-start justify-center">
          ${ i === 0
            ? `<div class="flex w-full h-0.5"></div>`
            : i === displayData.findIndex(round => !round.date) ? `<div class="flex mt-5 w-full h-0.5 bg-gray-400 dark:bg-gray-500 rounded-full opacity-40"></div>` : `<div class="flex mt-5 w-full h-0.5 bg-gray-400 dark:bg-gray-500 rounded-full"></div>`
          }
          <div class="flex flex-col justify-center">
            <span class="mx-auto flex items-center justify-center w-10 h-10 text-lg font-medium border-2 border-gray-400 rounded-full text-gray-400 dark:text-gray-500 shrink-0 dark:border-gray-500">
              <!-- ${i+1} -->
              ${ round.date
                ? `<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>`
                : i === displayData.findIndex(round => !round.date)
                  ? `<svg class="w-5 h-5 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.09 3.294c1.924.95 3.422 1.69 5.472.692a1 1 0 0 1 1.438.9v9.54a1 1 0 0 1-.562.9c-2.981 1.45-5.382.24-7.25-.701a38.739 38.739 0 0 0-.622-.31c-1.033-.497-1.887-.812-2.756-.77-.76.036-1.672.357-2.81 1.396V21a1 1 0 1 1-2 0V4.971a1 1 0 0 1 .297-.71c1.522-1.506 2.967-2.185 4.417-2.255 1.407-.068 2.653.453 3.72.967.225.108.443.216.655.32Z"/>
                    </svg>`
                  : `<svg class="w-7 h-7 ms-0.5 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                    </svg>`
              }
            </span>
            <!-- <span class="mt-1 text-center text-sm font-normal text-gray-400 dark:text-gray-500">Round ${i+1}</span> -->
            
          </div>
          ${ i === displayData.length-1
            ? `<div class="flex w-full h-0.5"></div>`
            : `<div class="flex mt-5 w-full h-0.5 bg-gray-400 dark:bg-gray-500 rounded-full"></div>`
          }
        </div>
        <div class="mt-1 text-center">
          <span class="bg-gray-200 text-gray-800 text-xs font-medium mt-1.5 mb-0.5 px-1.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">Round ${i+1}</span>
          ${ filteredData.some(item => item.gp_name.includes(round.gp_name + " (Sprint)")) ? `<span class="bg-red-100 text-red-800 text-xs font-medium px-1.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">Sprint</span>` : `` }
        </div>
        <h5 class="text-base sm:text-lg font-semibold text-center tracking-tight text-gray-900 dark:text-gray-100 truncate">${round.gp_flag} ${round.gp_name}</h5>
        <p class="text-center text-sm font-normal text-gray-400 dark:text-gray-500 truncate">${ round.date ? round.date : ` ` }</p>
        <img class="px-16 mb-8 opacity-90" src="${round.gp_map}" alt="Circuit de ${round.gp_name}" />
      `;

    swiperDiv.appendChild(slide);
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 0,
    centeredSlides: true,
    resistance: false,
    resistanceRatio: .85,
    grabCursor: true,
    slideToClickedSlide: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        550: {
            slidesPerView: 2,
            centeredSlides: false
        },
        768: {
            slidesPerView: 3,
            centeredSlides: true
        },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 50,
        // },
    },
});

let slideIndex;
if (displayData.findIndex(item => !item.date) > -1) {
    slideIndex = displayData.findIndex(item => !item.date);
} else {
    slideIndex = displayData.length - 1;
}

swiper.slideTo(slideIndex, 2000);




// Données pour les graphiques
let gp_flags = [];
let gp_names = [];
let race_gauvain_pts = [];
let race_galahad_pts = [];
let lastIsSprint = false;
let last_sprint_gauvain_pts = 0;
let last_sprint_galahad_pts = 0;

data.forEach(item => {
    if (item.date) {
        if (!item.gp_name.includes('Sprint')) {
            if (!lastIsSprint) {
                gp_flags.push(item.gp_flag);
                gp_names.push(item.gp_flag + " " + item.gp_name + " | " + item.date);
                race_gauvain_pts.push(item.race_gauvain_pts);
                race_galahad_pts.push(item.race_galahad_pts);
            } else {
                gp_flags.push(item.gp_flag);
                gp_names.push(item.gp_flag + " " + item.gp_name);
                race_gauvain_pts.push(item.race_gauvain_pts + last_sprint_gauvain_pts);
                race_galahad_pts.push(item.race_galahad_pts + last_sprint_galahad_pts);
            }
        } else {
            lastIsSprint = true;
            last_sprint_gauvain_pts = item.race_gauvain_pts;
            last_sprint_galahad_pts = item.race_galahad_pts;
        };
    } else {
        if (!item.gp_name.includes('Sprint')) {
            gp_flags.push(item.gp_flag);
            gp_names.push(item.gp_flag + " " + item.gp_name);
            race_gauvain_pts.push(null);
            race_galahad_pts.push(null);
        }
    }
});

const championship_gauvain_pts = arraySum(race_gauvain_pts);
const championship_galahad_pts = arraySum(race_galahad_pts);

function arraySum(originalArray) {
    let accumulatedArray = [];
    let sum = 0;
    for (let i = 0; i < originalArray.length; i++) {
        if (originalArray[i] === null) {
            accumulatedArray.push(null);
        } else {
            sum += originalArray[i];
            accumulatedArray.push(sum);
        }
    }
    return accumulatedArray;
}




// Configuration du premier graphique
const optionsRaces = {
    chart: {
        type: 'line',
        id: 'chartRaces',
        group: 'timeline',
        height: 350,
        fontFamily: "Lexend, sans-serif",
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
    },
    series: [{
            name: "Gauvain",
            color: "#9CA3AF",
            data: race_gauvain_pts,
            zIndex: 1
        },
        {
            name: "Galahad",
            color: "#c81e1e",
            data: race_galahad_pts,
            hidden: false,
            zIndex: 0
        }
    ],
    xaxis: {
        categories: gp_names,
        overwriteCategories: gp_flags,
        tooltip: {
            enabled: false
        },
        labels: {
            // show: false,
            rotate: 0,
            hideOverlappingLabels: false,
            trim: true,
            style: {
                // fontSize: '8px'
            }
        },
        tickPlacement: 'on',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
        // title: {
        //   text: 'GP Flags'
        // }
    },
    yaxis: {
        labels: {
            // show: false,
            // formatter: function (value) {
            //     return value + ' pts';
            // },
            style: {
                colors: ['#90A4AE']
            },
            offsetX: -12
        },
        // title: {
        //   text: 'Points'
        // }
    },
    stroke: {
        show: true,
        width: 6,
        curve: 'monotoneCubic',
        lineCap: 'round',
    },
    tooltip: {
        shared: true,
        y: {
            formatter: function(value) {
                if (value < 2) return value + " point";
                else return value + " points";
            },
            title: {
                formatter: (seriesName) => seriesName + " :",
            },
        }
    },
    markers: {
        size: 0,
        colors: undefined,
        strokeWidth: 2,
    },
    grid: {
        strokeDashArray: 6,
        padding: {
            left: 0,
            top: -12
        }
    },
    // dataLabels: {
    //   enabled: true,
    // },
    responsive: [{
        breakpoint: 550,
        options: {
            xaxis: {
                labels: {
                    show: false
                }
            },
            grid: {
                padding: {
                    right: 0
                }
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 3,
            borderRadiusApplication: 'end',
            borderRadiusWhenStacked: 'last',
            columnWidth: '70%',
            barHeight: '70%',
            dataLabels: {
                position: 'top'
            }
        }
    }
};




// Configuration du deuxième graphique
const optionsChampionship = {
    chart: {
        type: 'area',
        id: 'chartChampionship',
        group: 'timeline',
        height: 350,
        // width: '100%',
        stacked: false,
        fontFamily: "Lexend, sans-serif",
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false,
            autoScaleYaxis: true
        },
        events: {
            // Synchronisation des deux graphiques
            selection: function(chart, e) {
                const selectedData = e.xaxis;
                chart1.updateOptions({
                    xaxis: {
                        min: selectedData.min,
                        max: selectedData.max
                    }
                });
            }
        }
    },
    series: [{
            name: "Gauvain",
            color: "#9CA3AF",
            data: championship_gauvain_pts,
            zIndex: 1
        },
        {
            name: "Galahad",
            color: "#c81e1e",
            data: championship_galahad_pts,
            zIndex: 0
        }
    ],
    dataLabels: {
        enabled: false,
    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.5,
            opacityTo: 0,
            // shade: "#c81e1e",
            // gradientToColors: ["#9CA3AF", "#c81e1e"],
        },
    },
    xaxis: {
        categories: gp_names,
        overwriteCategories: gp_flags,
        labels: {
            // show: false,
            rotate: 0,
            hideOverlappingLabels: false,
            trim: true,
        },
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
        // title: {
        //   text: 'GP Flags'
        // }
    },
    yaxis: {
        labels: {
            // show: false,
            // formatter: function (value) {
            //     return value + ' pts';
            // },
            style: {
                colors: ['#90A4AE']
            },
            offsetX: -12
        },
        // title: {
        //   text: 'Points Totaux'
        // }
    },
    tooltip: {
        shared: true,
        y: {
            formatter: function(value) {
                if (value < 2) return value + " point";
                else return value + " points";
            },
            title: {
                formatter: (seriesName) => seriesName + " :",
            },
        }
    },
    stroke: {
        width: 6,
        curve: 'monotoneCubic',
        lineCap: 'round'
    },
    grid: {
        strokeDashArray: 6,
        padding: {
            left: 0,
            top: -12
        }
    },
    responsive: [{
        breakpoint: 550,
        options: {
            xaxis: {
                labels: {
                    show: false
                }
            }
        }
    }]
};

chartRacesDiv.innerHTML = ``;
chartChampionshipDiv.innerHTML = ``;
const chartRaces = new ApexCharts(chartRacesDiv, optionsRaces);
const chartChampionship = new ApexCharts(chartChampionshipDiv, optionsChampionship);
chartRaces.render();
chartChampionship.render();