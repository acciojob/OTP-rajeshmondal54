function moveToNext(current, nextFieldID) {
    if (current.value.length === 1) {
        document.getElementById(nextFieldID).focus();
    }
}

function moveToPrev(current, prevFieldID, event) {
    if (event.key === 'Backspace' && current.value.length === 0) {
        document.getElementById(prevFieldID).focus();
    }
}


describe('OTP Verification Test', () => {
    const baseUrl = 'http://localhost:3000'; // Change to your base URL

    it('should load the OTP verification page correctly', () => {
        cy.visit(baseUrl + "/main.html");
        cy.get("#verification_heading").should("have.text", "Verify Your Account");
        cy.get("#verification_subtext").should("exist");
        cy.get(".code-container").find("input.code").eq(5).should("exist");
    });

    it('should focus on the next input field on typing', () => {
        cy.visit(baseUrl + "/main.html");
        cy.focused().should("have.id", "code-1");
        cy.get("#code-1").type('5');
        cy.focused().should("have.id", "code-2");
        cy.get("#code-2").type('1');
        cy.focused().should("have.id", "code-3");
        cy.get("#code-3").type('7');
        cy.focused().should("have.id", "code-4");
        cy.get("#code-4").type('2');
        cy.focused().should("have.id", "code-5");
        cy.get("#code-5").type('9');
        cy.focused().should("have.id", "code-6");
        cy.get("#code-6").type('6');
    });

    it('should focus on the previous input field on backspace', () => {
        cy.visit(baseUrl + "/main.html");
        cy.get("#code-6").type("{backspace}");
        cy.focused().should("have.id", "code-5");
        cy.get("#code-5").type("{backspace}");
        cy.focused().should("have.id", "code-4");
        cy.get("#code-4").type("{backspace}");
        cy.focused().should("have.id", "code-3");
        cy.get("#code-3").type("{backspace}");
        cy.focused().should("have.id", "code-2");
        cy.get("#code-2").type("{backspace}");
        cy.focused().should("have.id", "code-1");
        cy.get("#code-1").type("{backspace}");
    });
});
