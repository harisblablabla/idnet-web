import { Link } from "@/i18nconfig";

const LanguageSwitcher = () => {

  return (
    <>
      <li><Link href="/" locale="id" >🇮🇩  ID (Bahasa Indonesia)</Link></li>
      <li><Link href="/" locale="en" >🇺🇸  EN (English - US)</Link></li>
    </>
  );
};

export default LanguageSwitcher;