import { footerLinks } from "../../constants";

const FooterLinks = () => {
  return (
    <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h4 className="text-white font-montserrat text-2xl font-medium mb-6">
            {section.title}
          </h4>
          <ul>
            {section.links.map((link) => (
              <li
                className="text-white-400 mt-4 font-montserrat text-base hover:text-slate-gray cursor-pointer"
                key={link.name}
              >
                <a href="/">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
