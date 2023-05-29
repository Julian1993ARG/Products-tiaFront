class Route {
  constructor (path: string, name: string) {
    this.path = path
    this.name = name
  }

  public path: string
  public name: string
}

class Routes {
  static Home = new Route('/', 'Home')
}

export const routes = Routes
