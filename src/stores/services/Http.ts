export class Http {
  public static async get<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
      },
    });

    const object = await response.json();
    return object as T;
  }
}
