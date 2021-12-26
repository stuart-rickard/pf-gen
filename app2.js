var profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
    profileDataArr.forEach(console.log);
    profileDataArr.forEach(profileItem => console.log(profileItem));
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
  });
};

printProfileData(profileDataArgs);