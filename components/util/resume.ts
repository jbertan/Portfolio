export class Resume {
  userName: string;
  aboutMe = "";
  experience: string[] = [];
  caption = "";
  position = "";
  description = "";

  constructor(userName: string) {
    this.userName = userName;
  }

  /**
   * name
   */
  set setAboutMe(aboutMe: string) {
    this.aboutMe = aboutMe;
  }
  set setExperience(exper: string) {
    this.experience = [...this.experience, exper];
  }
  set setCaption(caption: string) {
    this.caption = caption;
  }
  set setPosition(position: string) {
    this.position = position;
  }
  set setDescription(description: string) {
    this.description = description;
  }

  get All() {
    return this.setExperience;
  }
}
