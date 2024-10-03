export interface personservice<T>{

    add(persona: T):T
    delete(persona:T):T
    update(persona:T):T
    seachbyid(id:T):T
    getall():T
}