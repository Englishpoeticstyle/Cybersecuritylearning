// Glossary data. To add a term, copy an object and give it a unique lowercase id.
// Audio files are optional. If a file is missing, the browser's voice is used.
const GLOSSARY = [
  {
    id: "phishing", level: "Beginner",
    en: { term: "phishing", def: "A scam where an attacker pretends to be a trusted person or company to trick you into revealing passwords or personal data.", ipa: "/ˈfɪʃɪŋ/", say: "FISH-ing" },
    fr: { term: "hameçonnage", def: "Escroquerie qui consiste à se faire passer pour une personne ou une entreprise de confiance afin de voler des mots de passe ou des données personnelles.", ipa: "/am.so.naʒ/", say: "am-so-NAJ" },
    ar: { term: "التَّصَيُّد الِاحْتِيَالِي", def: "احتيال يتظاهر فيه المهاجم بأنه شخص أو جهة موثوقة لخداعك وكشف كلمات المرور أو بياناتك الشخصية.", ipa: "at-ta-say-yud al-ih-ti-yaa-li", say: "at-ta-SAY-yud al-ih-ti-YA-li" }
  },
  {
    id: "malware", level: "Beginner",
    en: { term: "malware", def: "Software written to harm a device, steal data, or give an attacker control over it.", ipa: "/ˈmælwɛər/", say: "MAL-wair" },
    fr: { term: "logiciel malveillant", def: "Programme conçu pour nuire à un appareil, voler des données ou donner un contrôle à un attaquant.", ipa: "/lɔ.ʒi.sjɛl ma.lɛ.vi.jɑ̃/", say: "lo-zhee-SYEL ma-lay-vee-YAN" },
    ar: { term: "البَرْمَجِيَّات الخَبِيثَة", def: "برامج مصممة للإضرار بالجهاز أو سرقة البيانات أو منح المهاجم التحكم فيه.", ipa: "al-bar-ma-jiy-yaat al-kha-bee-tha", say: "al-bar-ma-JEE-yat al-kha-BEE-tha" }
  },
  {
    id: "ransomware", level: "Beginner",
    en: { term: "ransomware", def: "Malware that locks your files or device and demands payment to unlock them.", ipa: "/ˈrænsəmwɛər/", say: "RAN-sum-wair" },
    fr: { term: "rançongiciel", def: "Logiciel malveillant qui bloque vos fichiers ou votre appareil et exige une rançon pour les débloquer.", ipa: "/ʁɑ̃.sɔ̃.ʒi.sjɛl/", say: "rahn-son-zhee-SYEL" },
    ar: { term: "بَرَامِج الفِدْيَة", def: "برمجيات خبيثة تقفل ملفاتك أو جهازك وتطلب مالًا مقابل فتحها.", ipa: "ba-ra-mij al-fid-ya", say: "ba-RA-mij al-FID-ya" }
  },
  {
    id: "social-engineering", level: "Beginner",
    en: { term: "social engineering", def: "Manipulating people into breaking security rules, for example by pressure, flattery, or fake urgency.", ipa: "/ˈsoʊʃəl ˌɛndʒɪˈnɪərɪŋ/", say: "SOH-shul en-juh-NEER-ing" },
    fr: { term: "ingénierie sociale", def: "Manipulation de personnes pour les amener à contourner les règles de sécurité, par pression, flatterie ou urgence factice.", ipa: "/ɛ̃.ʒe.ni.ʁi so.sjal/", say: "an-zhay-nee-REE so-SYAL" },
    ar: { term: "الهَنْدَسَة الاجْتِمَاعِيَّة", def: "التلاعب بالأشخاص لدفعهم إلى تجاوز قواعد الأمان، مثل استخدام الضغط أو الإلحاح المصطنع.", ipa: "al-han-da-sa al-ij-ti-maa-iy-ya", say: "al-han-da-sa al-ij-ti-MAA-iy-ya" }
  },
  {
    id: "firewall", level: "Beginner",
    en: { term: "firewall", def: "A security system that allows or blocks network traffic based on rules.", ipa: "/ˈfaɪərwɔːl/", say: "FIRE-wawl" },
    fr: { term: "pare-feu", def: "Système de sécurité qui autorise ou bloque le trafic réseau selon des règles définies.", ipa: "/paʁ.fø/", say: "pahr-FUH" },
    ar: { term: "جِدَار الحِمَايَة", def: "نظام أمني يسمح بمرور البيانات عبر الشبكة أو يمنعها وفق قواعد محددة.", ipa: "jid-daar al-hi-maa-ya", say: "jid-DAAR al-hi-MAA-ya" }
  },
  {
    id: "encryption", level: "Beginner",
    en: { term: "encryption", def: "Converting data into an unreadable form so that only someone with the right key can read it.", ipa: "/ɪnˈkrɪpʃən/", say: "in-KRIP-shun" },
    fr: { term: "chiffrement", def: "Transformation de données en une forme illisible, que seule une personne disposant de la bonne clé peut lire.", ipa: "/ʃif.ʁə.mɑ̃/", say: "shee-fre-MAN" },
    ar: { term: "التَّشْفِير", def: "تحويل البيانات إلى صيغة غير مقروءة، لا يستطيع قراءتها إلا من يملك المفتاح الصحيح.", ipa: "at-tash-fiir", say: "at-tash-FEER" }
  },
  {
    id: "vpn", level: "Beginner",
    en: { term: "VPN", def: "Virtual Private Network. It creates an encrypted tunnel between your device and a server, which protects traffic on public networks.", ipa: "/ˌviː piː ˈɛn/", say: "vee-pee-EN" },
    fr: { term: "RPV (VPN)", def: "Réseau privé virtuel. Il crée un tunnel chiffré entre votre appareil et un serveur, ce qui protège le trafic sur les réseaux publics.", ipa: "/ɛʁ.pe.ve/", say: "air-pay-vay" },
    ar: { term: "الشَّبَكَة الخَاصَّة الافْتِرَاضِيَّة", def: "تقنية تنشئ نفقًا مشفرًا بين جهازك وخادم، وتحمي بياناتك على الشبكات العامة.", ipa: "ash-shabaka al-khaassa al-if-ti-raa-diy-ya", say: "ash-sha-BA-ka al-KHAAS-sa al-if-ti-RAA-diy-ya" }
  },
  {
    id: "two-factor-authentication", level: "Beginner",
    en: { term: "two-factor authentication", def: "A login method that requires two different proofs, such as a password and a code sent to your phone.", ipa: "/tuː ˈfæktər ɔːˌθɛntɪˈkeɪʃən/", say: "too FAK-ter aw-then-ti-KAY-shun" },
    fr: { term: "authentification à deux facteurs", def: "Méthode de connexion qui exige deux preuves différentes, par exemple un mot de passe et un code reçu sur votre téléphone.", ipa: "/o.tɑ̃.ti.fi.ka.sjɔ̃ a dø fak.tœʁ/", say: "oh-tahn-tee-fee-kah-SYON ah duh fak-TUHR" },
    ar: { term: "المُصَادَقَة الثُّنَائِيَّة", def: "طريقة تسجيل دخول تتطلب دليلين مختلفين، مثل كلمة المرور ورمز يصلك على الهاتف.", ipa: "al-musaadaqa ath-thunaa-iy-ya", say: "al-mu-saa-da-qa ath-thu-NAA-iy-ya" }
  },
  {
    id: "cia-triad", level: "Beginner",
    en: { term: "CIA triad", def: "The three core goals of security: confidentiality, integrity, and availability.", ipa: "/ˈsiːˈaɪ ˈtraɪæd/", say: "see-eye-AY TRY-ad" },
    fr: { term: "triade CIA", def: "Les trois objectifs de base de la sécurité : confidentialité, intégrité et disponibilité.", ipa: "/tʁi.ad se.i.a/", say: "tree-AHD say-ee-AH" },
    ar: { term: "ثُلَاثِيَّة CIA", def: "الأهداف الثلاثة الأساسية للأمن: السرية والسلامة والتوافر.", ipa: "thu-laa-thiy-yat CIA", say: "thu-LAA-thiy-yat see-eye-AY" }
  },
  {
    id: "hashing", level: "Intermediate",
    en: { term: "hashing", def: "Turning data into a fixed-length fingerprint. It is one-way, so the original cannot be recovered from the hash.", ipa: "/ˈhæʃɪŋ/", say: "HASH-ing" },
    fr: { term: "hachage", def: "Calcul d'une empreinte de longueur fixe à partir de données. Il est à sens unique : l'original ne peut pas être retrouvé.", ipa: "/a.ʃaʒ/", say: "a-SHAHZH" },
    ar: { term: "التَّجْزِئَة", def: "تحويل البيانات إلى بصمة ثابتة الطول، وهي أحادية الاتجاه ولا يمكن استرجاع الأصل منها.", ipa: "at-tajz-ia", say: "at-TAJ-zi-ya" }
  },
  {
    id: "zero-day", level: "Intermediate",
    en: { term: "zero-day", def: "A security flaw unknown to the software vendor, so no fix exists yet on the day it is discovered.", ipa: "/ˈzɪroʊ deɪ/", say: "ZEE-roh day" },
    fr: { term: "jour zéro", def: "Faille de sécurité inconnue de l'éditeur du logiciel, pour laquelle aucun correctif n'existe au moment de sa découverte.", ipa: "/ʒuʁ ze.ʁo/", say: "zhoor zeh-ROH" },
    ar: { term: "الثَّغْرَة ذَاتُ الْيَوْمِ الصِّفْر", def: "ثغرة أمنية غير معروفة لمطوّر البرنامج، ولا يوجد لها تصحيح وقت اكتشافها.", ipa: "ath-thagh-ra dhaat al-yawm as-sifr", say: "ath-THAGH-ra dhaat al-YAWM as-SIFR" }
  },
  {
    id: "siem", level: "Intermediate",
    en: { term: "SIEM", def: "Security Information and Event Management. A platform that collects logs from many systems and alerts analysts to suspicious activity.", ipa: "/ˈsaɪəm/", say: "SY-em" },
    fr: { term: "SIEM", def: "Gestion des informations et des événements de sécurité. Plateforme qui collecte les journaux de nombreux systèmes et alerte les analystes en cas d'activité suspecte.", ipa: "/sjɛm/", say: "syem" },
    ar: { term: "نظام SIEM", def: "نظام يجمع سجلات أحداث الأنظمة المختلفة وينبّه المحللين عند رصد نشاط مشبوه.", ipa: "nid-aam SIEM", say: "nid-AAM SIEM" }
  }
];

const LANG_NAMES = { en: "English", fr: "Français", ar: "العربية" };
const SPEECH_LANG = { en: "en-US", fr: "fr-FR", ar: "ar-DZ" };
const AUDIO_BASE = "audio/"; // optional recordings: audio/en/phishing.mp3, audio/fr/..., audio/ar/...

const list = document.getElementById("list");
const search = document.getElementById("search");
const status = document.getElementById("status");

const normalize = (s) => s.toLowerCase().replace(/[\u064B-\u0652]/g, "");

function speak(text, lang, rate) {
  if (!("speechSynthesis" in window)) {
    status.textContent = "Audio is not supported on this device.";
    return;
  }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = SPEECH_LANG[lang];
  u.rate = rate;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function playTerm(term, lang, slow) {
  const rate = slow ? 0.7 : 1;
  const file = AUDIO_BASE + lang + "/" + term.id + ".mp3";
  const audio = new Audio(file);
  audio.playbackRate = rate;
  audio.onerror = () => speak(term[lang].term, lang, rate);
  audio.play().catch(() => speak(term[lang].term, lang, rate));
}

function button(label, aria, onClick) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "play";
  b.textContent = label;
  b.setAttribute("aria-label", aria);
  b.addEventListener("click", onClick);
  return b;
}

function render() {
  const frag = document.createDocumentFragment();
  GLOSSARY.forEach((t) => {
    const li = document.createElement("li");
    li.className = "term";
    li.dataset.search = normalize(
      ["en", "fr", "ar"].map((l) => `${t[l].term} ${t[l].def}`).join(" ")
    );

    const h3 = document.createElement("h3");
    h3.textContent = `${t.en.term} (${t.level})`;
    li.appendChild(h3);

    ["en", "fr", "ar"].forEach((lang) => {
      const sec = document.createElement("div");
      sec.className = "lang";
      sec.lang = lang;
      if (lang === "ar") sec.dir = "rtl";

      const label = document.createElement("div");
      label.className = "label";
      label.textContent = LANG_NAMES[lang];
      sec.appendChild(label);

      const word = document.createElement("div");
      word.className = "word";
      word.textContent = t[lang].term;
      sec.appendChild(word);

      const def = document.createElement("p");
      def.textContent = t[lang].def;
      sec.appendChild(def);

      const pron = document.createElement("p");
      pron.className = "pron";
      pron.textContent = `${t[lang].ipa} · ${t[lang].say}`;
      sec.appendChild(pron);

      sec.appendChild(button("▶ Listen", `Listen to the ${LANG_NAMES[lang]} pronunciation of ${t.en.term}`, () => playTerm(t, lang, false)));
      sec.appendChild(button("🐢 Slow", `Listen slowly to the ${LANG_NAMES[lang]} pronunciation of ${t.en.term}`, () => playTerm(t, lang, true)));

      li.appendChild(sec);
    });

    frag.appendChild(li);
  });
  list.appendChild(frag);
}

search.addEventListener("input", () => {
  const q = normalize(search.value.trim());
  let shown = 0;
  list.querySelectorAll(".term").forEach((li) => {
    const match = li.dataset.search.includes(q);
    li.hidden = !match;
    if (match) shown++;
  });
  status.textContent = `${shown} term(s) found`;
});

render();
status.textContent = `${GLOSSARY.length} terms`;
