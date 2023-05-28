class Route {
  constructor (path: string, name: string) {
    this.path = path
    this.name = name
  }

  public path: string
  public name: string
}

export const routes: Route[] = [
  new Route('/', 'Home'),
]
