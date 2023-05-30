class Route {
  constructor (path: string, name: string) {
    this.path = path;
    this.name = name;
  }

  public path: string;
  public name: string;
}

class Routes {
  static Home = new Route('/', 'Inicio');
  static Admin = new Route('/admin', 'Administración');
}

export const routes = Routes;
