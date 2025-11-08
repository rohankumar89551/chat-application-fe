let socket: WebSocket | null = null;

export const createSocket = (url: string) => {
  if (!socket) {
    socket = new WebSocket(url);
  }
  return socket;
};

export const getSocket = () => socket;
