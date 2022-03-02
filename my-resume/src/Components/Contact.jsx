import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons';

// library.add(fab
//   );
const padding = {
  padding: "5px"
};


const ContactInfo = () => {
  return (
    <div>
      <h2>Contact</h2>
      <div>
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
        <span style={padding}>Kemptville, ON</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
        <span style={padding}>613-355-6478</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} />
        <span style={padding}>gabmor38</span>
      </div>
    </div>

  );
};
export default ContactInfo;