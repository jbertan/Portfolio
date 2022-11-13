interface cv {
  caption: string;
  position: string;
  description: string;
}
export class Resume {
  userName: string;
  aboutMe = "";
  experience: cv[] = [];
  constructor(userName: string) {
    this.userName = userName;
  }

  /**
   * name
   */
  public setAboutMe(aboutMe: string) {
    this.aboutMe = aboutMe;
  }
  public addExperience(caption: string, position: string, description: string) {
    this.experience.push({ caption, position, description });
  }
  public setExperience(experience: cv[]) {
    this.experience = experience;
  }
  get All() {
    return this.experience;
  }
}
