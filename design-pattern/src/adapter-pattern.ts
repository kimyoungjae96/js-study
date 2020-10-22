// Adapter를 통해 Adaptee 즉, 형식을 맞춰야 할 대상을 변경하여 기존 클라이언트의 코드에 변화를 주지 않는 디자인 패턴
class Target {
  public request(): string {
    return "request";
  }
}

class Adaptee {
  public specificRequest(): string {
    return "specificRequest";
  }
}

class Adatper extends Target {
  private adaptee: Adaptee;
  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest();
    return result;
  }
}

function clientCode2(target: Target) {
  console.log(target.request());
}

const target = new Target();
const adaptee = new Adaptee();

clientCode2(target);
console.log(adaptee.specificRequest());
const adapter = new Adatper(adaptee);
clientCode2(adapter);
