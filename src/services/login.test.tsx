import { login } from './login';


describe("login", () => { 

    it("Deve efetuar um alert na tela do cliente ao clicar no botão.", () => {
        window.alert = jest.fn();
        login();
        expect(window.alert).toHaveBeenCalledWith("Login realizado com sucesso!");
    })

})


