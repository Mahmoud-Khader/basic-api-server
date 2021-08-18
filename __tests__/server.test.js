'use strict';

const supertest =require('supertest');
const server =require('../src/server');
const request = supertest(server.app);


describe('express server',()=>{
    it('should check the Hello Mahmoud works successfully' ,async()=>{
        //arrange
        let param='/';
        let status = 200;
        let text = 'Hello Mahmoud';
        //act
        const response = await request.get(param);
        //assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text);

    });



    it('should check the 500 errors' ,async()=>{
        //arrange
        let param='/bad';
        let status = 500;
        
        //act
        const response = await request.get(param);
        //assert
        expect(response.status).toBe(status);
        expect(response.body.route).toBe(param);

    });


    it('should check 404 not found errors' ,async()=>{
        //arrange
        let param='/notfound';
        let status = 404;
        
        //act
        const response = await request.get(param);
        //assert
        expect(response.status).toBe(status);
        

    });

    test('should check getAll food' ,async()=>{
        //arrange
        let param='/food';
        let status = 200;
        
        //act
        const response = await request.get(param);
        //assert
        expect(response.status).toBe(status);
        

    });

    
    it('200 get', async () => {
        const response = await request.get('/food'); 
        expect(response.status).toEqual(200);
        
    
    });
    
    

    it('Create a record using POST', async () => {
        const reqBody={
        "firstName":"Mahmoud",
        "theMeal":"Kabab",
        "drink":"pepsi"
    }
        const response = await request.post('/food').send(reqBody); 
        expect(response.status).toEqual(201);
      
        
    
    });
    
    it('200 if put', async () => {
        const response = await request.put('/food/2'); 
        expect(response.status).toEqual(200);
        
    
    });
    it('200 if delete', async () => {
        const response = await request.delete('/food/3'); 
        expect(response.status).toEqual(204);
        
    
    });

    
    
    it('200 get clothes', async () => {
        const response = await request.get('/clothes'); 
        expect(response.status).toEqual(200);
        
    
    });
    
    
    it('200 if post clothes', async () => {
        let reqBody={
        "firstName":"mahmoud",
        "pants":"jeains",
        "shoes":"addidas",
        "Shirt":"addidas"
    }
        const response = await request.post('/clothes').send(reqBody); 
        expect(response.status).toEqual(200);
        
    
    });
   
    
    it('200 if put clothes ', async () => {
        const response = await request.put('/clothes/2'); 
        expect(response.status).toEqual(200);
        
    
    });
    it('200 if delete clothes', async () => {
        const response = await request.delete('/clothes/3'); 
        expect(response.status).toEqual(204);
        
    
    });

  


});
