"use client";

import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Creative Tech</h3>
            <p className="text-sm">
              {t("about.subtitle")}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t("nav.services")}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t("services.web.title")}</li>
              <li>{t("services.2d.title")}</li>
              <li>{t("services.3d.title")}</li>
              <li>{t("services.marketing.title")}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t("contact.info.title")}</h3>
            <ul className="space-y-2 text-sm">
              <li>hello@creativetech.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Innovation Street
                <br />
                Tech City, TC 12345
                <br />
                United States
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t("contact.hours.title")}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t("contact.hours.weekday")}</li>
              <li>{t("contact.hours.saturday")}</li>
              <li>{t("contact.hours.sunday")}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Creative Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 