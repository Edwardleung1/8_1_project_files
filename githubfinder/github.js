class Github {
  constructor() {
    this.client_id = "22a293972e894d1cf9b8";
    this.client_secret = "75fe1f932ea55318e586099c69074de6c723f02e";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    // await response of the fetch call
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // await response of the fetch call for the REPOS
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // Only proceed once its resolved
    const profile = await profileResponse.json();

    // Only proceed once its resolved
    const repos = await repoResponse.json();

    // Only proceed once second promise is resolved
    return {
      profile,
      repos,
    };
  }
}
