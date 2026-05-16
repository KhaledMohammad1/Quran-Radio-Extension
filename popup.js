const stations = [
  // ─── قسم التلاوات المجودة ───
  { name: 'محمود خليل الحصري', subtitle: 'رواية حفص - مجود', url: 'https://qurango.net/radio/mahmoud_khalil_alhussary_mojawwad' },
  { name: 'محمود خليل الحصري', subtitle: 'رواية حفص - مرتل', url: 'https://qurango.net/radio/mahmoud_khalil_alhussary' },
  { name: 'محمود خليل الحصري', subtitle: 'رواية ورش عن نافع', url: 'https://backup.qurango.net/radio/mahmoud_khalil_alhussary_warsh' },
  { name: 'محمد صديق المنشاوي', subtitle: 'رواية حفص - مجود', url: 'https://qurango.net/radio/mohammed_siddiq_alminshawi_mojawwad' },
  { name: 'محمد صديق المنشاوي', subtitle: 'رواية حفص - مرتل', url: 'https://qurango.net/radio/mohammed_siddiq_alminshawi' },
  { name: 'عبد الباسط عبد الصمد', subtitle: 'رواية حفص - مجود', url: 'https://qurango.net/radio/abdulbasit_abdulsamad_mojawwad' },
  { name: 'عبد الباسط عبد الصمد', subtitle: 'رواية حفص - مرتل', url: 'https://qurango.net/radio/abdulbasit_abdulsamad' },
  { name: 'عبد الباسط عبد الصمد', subtitle: 'رواية ورش عن نافع', url: 'https://backup.qurango.net/radio/abdulbasit_abdulsamad_warsh' },
  { name: 'محمود علي البنّا', subtitle: 'رواية حفص - مجود', url: 'https://backup.qurango.net/radio/mahmoud_ali__albanna_mojawwad' },
  { name: 'محمود علي البنّا', subtitle: 'رواية حفص - مرتل', url: 'https://backup.qurango.net/radio/mahmoud_ali__albanna' },
  { name: 'مصطفى إسماعيل', subtitle: 'رواية حفص', url: 'https://qurango.net/radio/mustafa_ismail' },
  { name: 'محمد الطبلاوي', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/mohammad_altablaway' },
  
  // ─── قسم التلاوات المرتلة (القائمة الجديدة والقديمة) ───
  { name: 'إذاعة القرآن الكريم من القاهرة', subtitle: 'إذاعة', url: 'https://stream.radiojar.com/8s5u5tpdtwzuv' },
  { name: 'إذاعة القرآن الكريم - السعودية', subtitle: 'إذاعة', url: 'https://stream.radiojar.com/0tpy1h0kxtzuv' },
  { name: 'إذاعة الحرم المكي', subtitle: 'إذاعة', url: 'http://r7.tarat.com:8004/stream?type=http&nocache=114' },
  { name: 'الإذاعة العامة - اذاعة متنوعة لمختلف القراء', subtitle: 'إذاعة', url: 'https://backup.qurango.net/radio/mix' },
  { name: 'تلاوات خاشعة', subtitle: 'روايات متنوعة', url: 'https://backup.qurango.net/radio/salma' },
  { name: 'سورة البقرة - لعدد من القراء', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/albaqarah' },

  { name: 'عبد الرحمن السديس', subtitle: 'رواية حفص', url: 'https://qurango.net/radio/abdulrahman_alsudaes' },
  { name: 'أحمد طالب بن حميد', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/a_binhameed' },
  { name: 'محمد اللحيدان', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/mohammed_allohaidan' },
  { name: 'علي الحذيفي', subtitle: 'رواية حفص', url: 'https://qurango.net/radio/ali_alhuthaifi' },
  { name: 'محمد جبريل', subtitle: 'رواية حفص', url: 'https://qurango.net/radio/mohammed_jibreel' },
  { name: 'حاتم فريد الواعر', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/mahmood_al_rifai' },
  { name: 'أحمد نعينع', subtitle: 'رواية حفص', url: 'https://qurango.net/radio/ahmad_nauina' },
  { name: 'بندر بليلة', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/bandar_balilah' },
  { name: 'فارس عباد', subtitle: 'رواية حفص', url: 'https://qurango.net/radio/fares_abbad' },
  { name: 'علي جابر', subtitle: 'رواية حفص', url: 'https://qurango.net/radio/ali_jaber' },
  { name: 'محمد أيوب', subtitle: 'رواية حفص', url: 'https://qurango.net/radio/mohammed_ayyub' },
  { name: 'مشاري راشد العفاسي', subtitle: 'رواية حفص', url: 'https://qurango.net/radio/mishary_alafasi' },
  { name: 'ياسر الدوسري', subtitle: 'رواية حفص', url: 'https://qurango.net/radio/yasser_aldosari' },
  { name: 'خالد الجليل', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/khalid_aljileel' },
  { name: 'ياسر الدوسري', subtitle: 'رواية حفص', url: 'https://qurango.net/radio/yasser_aldosari' },
  { name: 'بدر التركي', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/bader' },
  { name: 'أحمد العجمي', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/ahmad_alajmy' },
  { name: 'سعد الغامدي', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/saad_alghamdi' },
  { name: 'سعود الشريم', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/saud_alshuraim' },
  { name: 'عبدالله خياط', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/abdullah_khayyat' },
  { name: 'ناصر القطامي', subtitle: 'رواية حفص', url: 'https://backup.qurango.net/radio/nasser_alqatami' },
  { name: 'قصص الأنبياء', subtitle: 'قصص', url: 'https://backup.qurango.net/radio/alanbiya' },
  { name: 'صحيح البخاري', subtitle: 'حديث', url: 'https://backup.qurango.net/radio/saheh-bokharee' },
  { name: 'صحيح مسلم', subtitle: 'حديث', url: 'https://backup.qurango.net/radio/saheh-muslim' },
  { name: 'المختصر في السيرة', subtitle: 'السيرة', url: 'https://backup.qurango.net/radio/saheh-muslim' },
  { name: 'المختصر في تفسير القرآن الكريم', subtitle: 'تفسير', url: 'https://backup.qurango.net/radio/mukhtasartafsir' },
  { name: 'تفسير القرآن الكريم للإمام الطبري', subtitle: 'تفسير', url: 'https://backup.qurango.net/radio/tabri' }
];
let isPlaying = false;
let currentStationIndex = 0;
let currentVolume = 0.8;

const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const stationList = document.getElementById('stationList');
const volumeSlider = document.getElementById('volumeSlider');
const volumeIcon = document.getElementById('volumeIcon');
const nowPlayingName = document.getElementById('nowPlayingName');
const nowPlayingSubtitle = document.getElementById('nowPlayingSubtitle');
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');
const loadingRing = document.getElementById('loadingRing');

function buildStationList() {
  stationList.innerHTML = '';
  stations.forEach((station, index) => {
    const item = document.createElement('div');
    item.className = 'station-item';
    item.dataset.index = index;
    item.innerHTML = `
      <div class="station-info">
        <span class="station-name">${station.name}</span>
        <span class="station-sub">${station.subtitle}</span>
      </div>
      <div class="station-active-indicator"></div>
    `;
    item.addEventListener('click', () => selectStation(index));
    stationList.appendChild(item);
  });
}

function selectStation(index) {
  currentStationIndex = index;
  updateStationUI();
  if (isPlaying) {
    setLoadingState(true);
    sendMessage({ target: 'background', action: 'play', url: stations[index].url, stationIndex: index })
      .then(() => setLoadingState(false));
  }
}

function updateStationUI() {
  document.querySelectorAll('.station-item').forEach((el, i) => {
    el.classList.toggle('active', i === currentStationIndex);
  });
  nowPlayingName.textContent = stations[currentStationIndex].name;
  nowPlayingSubtitle.textContent = stations[currentStationIndex].subtitle;
}

function setLoadingState(loading) {
  loadingRing.style.display = loading ? 'block' : 'none';
  statusDot.style.display = loading ? 'none' : 'block';
  statusText.textContent = loading ? 'جارٍ التحميل...' : (isPlaying ? 'يُبَثّ الآن' : 'متوقف');
}

function updatePlayState() {
  playIcon.textContent = isPlaying ? '⏸' : '▶';
  statusDot.classList.toggle('live', isPlaying);
  statusText.textContent = isPlaying ? 'يُبَثّ الآن' : 'متوقف';
  playBtn.classList.toggle('playing', isPlaying);
}

playBtn.addEventListener('click', async () => {
  if (!isPlaying) {
    isPlaying = true;
    updatePlayState();
    setLoadingState(true);
    await sendMessage({ target: 'background', action: 'play', url: stations[currentStationIndex].url, stationIndex: currentStationIndex });
    setLoadingState(false);
    updatePlayState();
  } else {
    isPlaying = false;
    updatePlayState();
    await sendMessage({ target: 'background', action: 'pause' });
  }
});

volumeSlider.addEventListener('input', () => {
  currentVolume = parseFloat(volumeSlider.value);
  updateVolumeIcon();
  sendMessage({ target: 'background', action: 'setVolume', volume: currentVolume });
});

function updateVolumeIcon() {
  if (currentVolume === 0) volumeIcon.textContent = '🔇';
  else if (currentVolume < 0.4) volumeIcon.textContent = '🔈';
  else if (currentVolume < 0.7) volumeIcon.textContent = '🔉';
  else volumeIcon.textContent = '🔊';
}

volumeIcon.addEventListener('click', () => {
  if (currentVolume > 0) {
    volumeSlider.dataset.prev = currentVolume;
    volumeSlider.value = 0;
    currentVolume = 0;
  } else {
    currentVolume = parseFloat(volumeSlider.dataset.prev || 0.8);
    volumeSlider.value = currentVolume;
  }
  updateVolumeIcon();
  sendMessage({ target: 'background', action: 'setVolume', volume: currentVolume });
});

function sendMessage(message) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage(message, (response) => {
      if (chrome.runtime.lastError) console.error('Message error:', chrome.runtime.lastError);
      resolve(response);
    });
  });
}

async function init() {
  buildStationList();
  const state = await sendMessage({ target: 'background', action: 'getState' });
  if (state && state.state) {
    isPlaying = state.state.isPlaying || false;
    currentStationIndex = state.state.currentStation || 0;
    currentVolume = state.state.volume ?? 0.8;
  }
  volumeSlider.value = currentVolume;
  updateVolumeIcon();
  updateStationUI();
  updatePlayState();
  const activeItem = stationList.querySelector('.station-item.active');
  if (activeItem) activeItem.scrollIntoView({ block: 'nearest' });
}

init();